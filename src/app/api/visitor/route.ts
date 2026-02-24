export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import VisitorCountry from "@/models/VisitorCountry";
import VisitorLog from "@/models/VisitorLog";

export async function GET(req: NextRequest) {
    await connectMongo();

    let ip =
        req.headers.get("x-forwarded-for")?.split(",")[0] ||
        req.headers.get("x-real-ip") ||
        "";

    if (
        !ip ||
        ip === "127.0.0.1" ||
        ip === "::1" ||
        ip.startsWith("192.") ||
        ip.startsWith("10.")
    ) {
        ip = "8.8.8.8"; // testing
    }

    // API GEO YANG AMAN
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();

    if (data.status !== "success") {
        return NextResponse.json({
            error: "Country not detected",
            ipUsed: ip,
            response: data,
        });
    }

    await VisitorCountry.findOneAndUpdate(
        { countryCode: data.countryCode },
        {
            $set: { countryName: data.country },
            $inc: { count: 1 },
        },
        { upsert: true }
    );

    await VisitorLog.create({
        ip,
        countryCode: data.countryCode,
        countryName: data.country,
        visitedAt: new Date(),
    });

    return NextResponse.json({
        ip,
        countryCode: data.countryCode,
        countryName: data.country,
    });
}