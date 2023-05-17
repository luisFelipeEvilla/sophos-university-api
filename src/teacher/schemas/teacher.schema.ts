import { Schema } from "mongoose";
import { Degree } from "../entities/degree.entity";
import { degreeSchema } from "./degree.schema";

export const teacherSchema = new Schema({
    firstname: String,
    lastname: String,
    birthday: Date,
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    degree: {
        type: degreeSchema
    }
});