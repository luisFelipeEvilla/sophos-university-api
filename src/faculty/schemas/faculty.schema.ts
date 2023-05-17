import { Schema } from "mongoose";

export const FacultySchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now }
})