import { Schema } from "mongoose";

export const CourseSchema = new Schema({
    name: String,
    description: String,
    max_quota: Number,
    credits: Number,
    createdAt: { type: Date, default: Date.now }
});
