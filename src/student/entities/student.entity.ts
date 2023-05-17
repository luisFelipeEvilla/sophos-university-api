import { Faculty } from "src/faculty/entities/faculty.entity";

export class Student {
    readonly firstname: string;
    readonly lastname: string;
    readonly birthday: Date;
    readonly faculty: Faculty;
}
