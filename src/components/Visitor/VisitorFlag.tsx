"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Visitor = {
    _id: string;
    countryCode: string;
    countryName: string;
    count: number;
};

export default function VisitorFlags() {
    const [data, setData] = useState<Visitor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/stats")
        .then((res) => res.json())
        .then((json) => {
            setData(json.slice(0, 10));
            setLoading(false);
        });
    }, []);

    // loading check
    if (loading) {
        return <p className="text-xs">Loading visitors...</p>;
    }

    if (!data.length) {
        return <p className="text-xs">No visitors yet.</p>;
    }

    const totalVisitors = data.reduce((sum, i) => sum + i.count, 0);
    const isTwoColumn = data.length >= 6;

    const left = isTwoColumn ? data.slice(0, Math.ceil(data.length / 2)) : data;
    const right = isTwoColumn ? data.slice(Math.ceil(data.length / 2)) : [];

    const FlagRow = ({ item }: { item: Visitor }) => (
        <div className="flex items-center justify-between gap-2 mb-1">
        <Image
            src={`https://flagcdn.com/w40/${item.countryCode.toLowerCase()}.png`}
            alt={item.countryName}
            width={24}
            height={16}
            className="rounded-sm"
            title={item.countryName}
        />
        <span className="text-xs font-medium tabular-nums">
            {item.count.toLocaleString()}
        </span>
        </div>
    );

    return (
        <div className="w-56 border rounded-md bg-white p-3 text-xs">
        {/* Header */}
        <div className="font-semibold mb-1">Visitors</div>

        {/* Total */}
        <div className="text-gray-600 mb-2">
            Total: <strong>{totalVisitors.toLocaleString()}</strong>
        </div>

        {/* Content */}
        {isTwoColumn ? (
            <div className="grid grid-cols-2 gap-x-3">
            <div>
                {left.map((item) => (
                <FlagRow key={item._id} item={item} />
                ))}
            </div>
            <div>
                {right.map((item) => (
                <FlagRow key={item._id} item={item} />
                ))}
            </div>
            </div>
        ) : (
            <div>
            {data.map((item) => (
                <FlagRow key={item._id} item={item} />
            ))}
            </div>
        )}
        </div>
    );
}