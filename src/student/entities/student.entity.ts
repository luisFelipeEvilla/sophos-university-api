import { TakeCourse } from "src/course/entities/take-course.entity";
import { Faculty } from "src/faculty/entities/faculty.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EnrollSemester } from "./enroll-semester.entity";
import { Semester } from "src/semester/entities/semester.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    birthday: Date

    @OneToOne(() => Faculty)
    @JoinColumn()
    faculty: Faculty;

    @OneToMany(() =>  TakeCourse, takeCourse => takeCourse.student, {cascade: true, eager: true})
    courses: TakeCourse[];

    @OneToOne(() => EnrollSemester, enrollSemester=> enrollSemester.student)
    semesters: EnrollSemester[];
}