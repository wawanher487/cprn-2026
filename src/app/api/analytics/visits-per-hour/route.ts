import { connectMongo } from "@/lib/mongodb";
import VisitorLog from "@/models/VisitorLog";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    //koneksi ke MongoDB
    await connectMongo();

    //mengambil query param "date" (format: YYYY-MM-DD)
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date"); // YYYY-MM-DD

    // Jika tidak ada tanggal → default hari ini (WIB)
    const selectedDate = date
        ? new Date(`${date}T00:00:00.000+07:00`)
        : new Date();

    // Range 1 hari penuh (00:00–23:59 WIB)
    const start = new Date(selectedDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(selectedDate);
    end.setHours(23, 59, 59, 999);

    const data = await VisitorLog.aggregate([
        {
        // 1️⃣ Filter hanya hari yang dipilih
        $match: {
            visitedAt: { $gte: start, $lte: end },
        },
        },
        {
        // 2️⃣ Konversi jam ke WIB
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
        // 3️⃣ Group per jam
        $group: {
            _id: "$hourWIB",
            count: { $sum: 1 },
        },
        },
        {
        // 4️⃣ Urutkan jam 0–23
        $sort: { _id: 1 },
        },
    ]);

    return NextResponse.json(data);
}