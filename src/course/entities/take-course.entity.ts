import { Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Course } from "./course.entity";
import { Student } from "src/student/entities/student.entity";

@Entity()
export class TakeCourse {
    @PrimaryColumn()
    studentId: number;

    @PrimaryColumn()
    courseId: number;

    @ManyToOne(() => Course, course => course.students)
    course: Course;

    @ManyToOne(() => Student, student => student.courses)
    student: Student;
}