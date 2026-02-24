"use client";

import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Data {
  _id: string;
  count: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length && label) {
        return (
        <div className="bg-white border p-2 text-xs rounded shadow">
            <div className="font-semibold">
            Date:{" "}
            {new Date(label).toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
                month: "short",
                year: "numeric",
            })}{" "}
            (WIB)
            </div>
            <div>{payload[0].value} visits</div>
        </div>
        );
    }
    return null;
};

export default function DailyVisitsChart() {
    const [data, setData] = useState<Data[]>([]);
    const [range, setRange] = useState<number>(30);

    useEffect(() => {
        fetch(`/api/analytics/visits-per-day?range=${range}`)
        .then((res) => res.json())
        .then(setData);
    }, [range]);

    return (
        <div className="my-4 border p-4 rounded">
        <div className="flex justify-between items-center mb-3">
            <div>
            <h2 className="font-semibold">Visits Per Day (WIB)</h2>
            <p className="text-xs text-gray-500">
                Daily visits based on Asia/Jakarta time
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

        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
                dataKey="_id"
                tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                })
                }
                minTickGap={20}
            />

            <YAxis allowDecimals={false} />

            <Tooltip content={<CustomTooltip />} />

            <Line
                type="monotone"
                dataKey="count"
                name="Visits"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
            />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}