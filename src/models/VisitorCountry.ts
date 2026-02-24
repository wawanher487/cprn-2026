import { Schema, models, model } from "mongoose";

const VisitorCountrySchema = new Schema(
    {
        countryCode: {
            type: String,
            required: true,
            unique: true,
        },
        countryName: {
            type: String,
            required: true,
        },
        count: {
            type: Number,
            default: 1,
        },
    },
    { timestamps: true }
);

export default models.VisitorCountry ||
    model("VisitorCountry", VisitorCountrySchema);