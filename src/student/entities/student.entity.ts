import { Faculty } from "src/faculty/entities/faculty.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Faculty)
    @JoinColumn()
    faculty: Faculty;

    @OneToMany(() => EnrollSemester, enrollSemester=> enrollSemester.student)
    semesters: EnrollSemester[];
}