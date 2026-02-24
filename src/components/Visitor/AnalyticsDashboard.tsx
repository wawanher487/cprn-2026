"use client";

import { useEffect, useState } from "react";

interface Summary {
    totalVisitors: number;
    avgPerDay: number;
}

interface Country {
    _id: string;
    countryName: string;
    count: number;
}

export default function AnalyticsDashboard() {
    const [summary, setSummary] = useState<Summary | null>(null);
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        fetch("/api/analytics/summary")
        .then(res => res.json())
        .then(setSummary);

        fetch("/api/stats/all")
        .then(res => res.json())
        .then(setCountries);
    }, []);

    if (!summary) return <p>Loading analytics...</p>;

    return (
        <div className="space-y-6 text-sm">
        {/* Summary */}
        <div className="grid grid-cols-1">
            <div className="border p-4 rounded">
            <div className="text-gray-500">Total Visitors</div>
            <div className="text-xl font-bold">
                {summary.totalVisitors}
            </div>
            </div>

            {/* <div className="border p-4 rounded">
                <div className="text-gray-500">
                    Average / Day (30 days)
                </div>
                <div className="text-xl font-bold">
                    {summary.avgPerDay}
                </div>
            </div> */}
        </div>

        {/* All Countries */}
        <div>
            <h2 className="font-semibold mb-2">
            Visitors by Country
            </h2>

            <table className="w-full border text-xs">
            <thead>
                <tr className="bg-gray-100">
                <th className="border p-2 text-left">Country</th>
                <th className="border p-2 text-right">Visits</th>
                </tr>
            </thead>
            <tbody>
                {countries.map(c => (
                <tr key={c._id}>
                    <td className="border p-2">
                    {c.countryName}
                    </td>
                    <td className="border p-2 text-right">
                    {c.count}
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
}