import { Faculty } from "src/faculty/entities/faculty.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EnrollSemester } from "./enroll-semester.entity";

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

    @OneToOne(() => EnrollSemester, enrollSemester=> enrollSemester.student)
    semesters: EnrollSemester[];
}