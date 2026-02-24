import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import VisitorLog from "@/models/VisitorLog";

export async function GET(req: Request) {
    await connectMongo();

    const {searchParams} = new URL(req.url);
    const range = Number (searchParams.get("range")) || 30; // default 30 hari

    const since = new Date();
    since.setDate(since.getDate() - range);

    const data = await VisitorLog.aggregate([
        {
            $match: {
                visitedAt: { $gte: since },
            },
        },
        {
        $group: {
            _id: {
            $dateToString: {
                format: "%Y-%m-%d",
                date: "$visitedAt",
                timezone: "Asia/Jakarta", 
            },
            },
            count: { $sum: 1 },
        },
        },
        { $sort: { _id: 1 } },
    ]);

    return NextResponse.json(data);
}