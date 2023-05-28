import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Student } from "./student.entity";
import { Semester } from "src/semester/entities/semester.entity";
import { Course } from "src/course/entities/course.entity";

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

    @ManyToMany(() => Course, course => course.students)
    courses: Course[];

    @OneToOne(() => EnrollSemester, enrollSemester => enrollSemester.student)
    semester: EnrollSemester[];
}