import mongoose from "mongoose";

const careerHistorySchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        status: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Status",
            default: "Applied",
            required: true,
        },
        notes: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const CareerHistory = mongoose.model("Status", careerHistorySchema);

export default CareerHistory