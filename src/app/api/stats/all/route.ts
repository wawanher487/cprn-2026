import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import VisitorCountry from "@/models/VisitorCountry";

export async function GET() {
    await connectMongo();

    const data = await VisitorCountry.find().sort({ count: -1 });

    return NextResponse.json(data);
}