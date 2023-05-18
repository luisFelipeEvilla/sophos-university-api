import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Course } from "./course.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";

@Entity()
export class TeachCourse {
    @PrimaryColumn()
    courseId: number;

    @PrimaryColumn()
    teacherId: number;

    @ManyToOne(() => Course, course => course.teachers)
    @JoinColumn({ name: "courseId" })
    course: Course;

    @ManyToOne(() => Teacher, teacher => teacher.courses)
    @JoinColumn({ name: "teacherId" })
    teacher: Teacher;
}