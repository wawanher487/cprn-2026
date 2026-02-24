import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import VisitorCountry from "@/models/VisitorCountry";
import VisitorLog from "@/models/VisitorLog";

export async function GET() {
    await connectMongo();

    //Total visitors (semua negara)
    const totalVisitorsAgg = await VisitorCountry.aggregate([
        { $group: { _id: null, total: { $sum: "$count" } } },
    ]);

    const totalVisitors = totalVisitorsAgg[0]?.total || 0;

    //Menghitung rata-rata per hari (30 hari terakhir)
    const days = 30;
    const since = new Date();
    since.setDate(since.getDate() - days);

    const visitsLast30Days = await VisitorLog.countDocuments({
        visitedAt: { $gte: since },
    });

    const avgPerDay = Math.round(visitsLast30Days / days);

    return NextResponse.json({
        totalVisitors,
        avgPerDay,
    });
}