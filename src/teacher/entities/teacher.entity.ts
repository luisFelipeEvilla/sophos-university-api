import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Degree } from "./degree.entity";
import { TeachCourse } from "src/course/entities/teach-course.entity";
import { Course } from "src/course/entities/course.entity";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    birthday: Date;

    @Column()
    facultyId: number;

    @OneToMany(() => Degree, degree => degree.teacher)
    degrees: Degree[];

    @ManyToMany(() => Course, course => course.teachers)
    courses: Course[];
}
