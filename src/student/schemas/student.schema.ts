import { Schema } from "mongoose";

export const StudentSchema = new Schema({
    firstname: String,
    lastname: String,
    birthday: Date,
    faculty: { type: Schema.Types.ObjectId, ref: 'Faculty' },
    createdAt: { type: Date, default: Date.now }
})

