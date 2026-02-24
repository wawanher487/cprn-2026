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
   Custom Tooltip
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
    const [range, setRange] = useState<number>(30);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
        setLoading(true);

        const res = await fetch(
            `/api/analytics/visits-per-hour?range=${range}`
        );

        const result = await res.json();
        setData(result);
        } catch (error) {
        console.error("Failed to fetch hourly data:", error);
        } finally {
        setLoading(false);
        }
    };

    fetchData();
    }, [range]);

    return (
        <div className="border p-4 rounded my-4">
        <div className="flex justify-between items-center mb-3">
            <div>
            <h2 className="font-semibold">Visits Per Hour (WIB)</h2>
            <p className="text-xs text-gray-500">
                Hourly distribution based on Asia/Jakarta time
            </p>
            </div>

            <select
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="border px-3 py-1 text-sm rounded"
            >
                <option value={7}>Last 7 Days</option>
                <option value={30}>Last 30 Days</option>
                <option value={60}>Last 60 Days</option>
                <option value={90}>Last 90 Days</option>
            </select>
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
                tickFormatter={(hour) =>
                    `${String(hour).padStart(2, "0")}:00`
                }
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