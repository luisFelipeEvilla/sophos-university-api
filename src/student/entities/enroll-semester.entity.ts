import { Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Student } from "./student.entity";
import { Semester } from "src/semester/entities/semester.entity";

@Entity()
export class EnrollSemester {
    @PrimaryColumn()
    studentId: number;

    @PrimaryColumn()
    semesterId: number;

    @Column()
    credits: number;

    @ManyToOne(() => Student, student => student.semesters)
    student: Student;

    @ManyToOne(() => Semester, semester => semester.students)
    semester: Semester;
}