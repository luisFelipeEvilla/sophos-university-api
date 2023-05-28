import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TeachCourse } from "./teach-course.entity";
import { TakeCourse } from "./take-course.entity";
import { Teacher } from "src/teacher/entities/teacher.entity";

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

    @ManyToMany(() => Teacher, teacher => teacher.courses)
    @JoinTable()
    teachers: Teacher[];

    @OneToMany(() => TakeCourse, takeCourse => takeCourse.course, {cascade: true})
    students: TakeCourse[];
}
