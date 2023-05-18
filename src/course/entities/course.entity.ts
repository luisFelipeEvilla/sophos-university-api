import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TeachCourse } from "./teach-course.entity";
import { TakeCourse } from "./take-course.entity";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    max_quota: number;

    @Column()
    credits: number;

    @OneToMany(() => TeachCourse, teachCourse => teachCourse.course, {cascade: true, eager: true})
    teachers: TeachCourse[];

    @OneToMany(() => TakeCourse, takeCourse => takeCourse.course, {cascade: true})
    students: TakeCourse[];
}
