import { Schema, model, models } from "mongoose";

const VisitorLogSchema = new Schema(
    {
        ip: String,
        countryCode: String,
        countryName: String,
        visitedAt: {
        type: Date,
        default: Date.now,
        },
    },
    { timestamps: true }
);

export default models.VisitorLog ||
    model("VisitorLog", VisitorLogSchema);