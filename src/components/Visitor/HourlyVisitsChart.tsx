"use client";

import { useEffect, useState } from "react";
import {
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

/* ======================
   Types
====================== */
interface Data {
    _id: number; // hour (0–23)
    count: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: number;
}

/* ======================
   Tooltip
====================== */
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length && label !== undefined) {
        return (
        <div className="bg-white border p-2 text-xs rounded shadow">
            <div className="font-semibold">
            {String(label).padStart(2, "0")}:00 –{" "}
            {String(label).padStart(2, "0")}:59 (WIB)
            </div>
            <div>{payload[0].value} visits</div>
        </div>
        );
    }
    return null;
};

/* ======================
   Component
====================== */
export default function HourlyVisitsChart() {
    const [data, setData] = useState<Data[]>([]);
    const [date, setDate] = useState<string>(
        new Date().toISOString().slice(0, 10)
    );
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true);
        const res = await fetch(
            `/api/analytics/visits-per-hour?date=${date}`
        );
        const result = await res.json();
        setData(result);
        setLoading(false);
        };

        fetchData();
    }, [date]);

    return (
        <div className="border p-4 rounded my-4">
        <div className="flex justify-between items-center mb-3">
            <div>
            <h2 className="font-semibold">Visits Per Hour (WIB)</h2>
            <p className="text-xs text-gray-500">
                Hourly visits for selected date (Asia/Jakarta)
            </p>
            </div>

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border px-3 py-1 text-sm rounded"
            />
        </div>

        {loading ? (
            <div className="h-[300px] flex items-center justify-center text-sm text-gray-400">
            Loading hourly data...
            </div>
        ) : (
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="_id"
                    tickFormatter={(h) => `${String(h).padStart(2, "0")}:00`}
                />
                <YAxis allowDecimals={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        )}
        </div>
    );
}