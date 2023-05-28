import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student.entity";
import { Semester } from "src/semester/entities/semester.entity";
import { Course } from "src/course/entities/course.entity";

@Entity()
export class EnrollSemester {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    credits: number;

    @ManyToOne(() => Student, student => student.semesters)
    student: Student;

    @ManyToMany(() => Course, course => course.students)
    courses: Course[];

    @ManyToOne(() => Semester, semester => semester.students)
    semester: Semester;
}