import { connectMongo } from "@/lib/mongodb";
import VisitorLog from "@/models/VisitorLog";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await connectMongo();

    const { searchParams } = new URL(req.url);
    const range = Number(searchParams.get("range") || 30);

    const since = new Date();
    since.setDate(since.getDate() - range);

    const data = await VisitorLog.aggregate([
        {
            $match: {
                visitedAt: { $gte: since },
            },
        },
        {
            // Konversi visitedAt → jam WIB
            $addFields: {
                hourWIB: {
                    $hour: {
                        date: "$visitedAt",
                        timezone: "Asia/Jakarta",
                    },
                },
            },
        },
        {
            // Hitung jumlah kunjungan per jam WIB
            $group: {
                _id: "$hourWIB",
                count: { $sum: 1 },
            },
        },
        {
            // Urutkan dari jam 00 → 23
            $sort: { _id: 1 },
        },
    ]);

    return NextResponse.json(data);
}