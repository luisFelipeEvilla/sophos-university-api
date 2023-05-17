import { Schema } from "mongoose";

export const degreeSchema = new Schema({
    title: String,
    earnedAt: Date
})