import { Faculty } from "src/faculty/entities/faculty.entity";
import { Degree } from "./degree.entity";

export class Teacher {
    readonly firstname: string;
    readonly lastname: string;
    readonly birthday: Date;
    readonly faculty: Faculty;
    readonly degrees: Degree;
}
