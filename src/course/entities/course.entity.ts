import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "src/teacher/entities/teacher.entity";
import { EnrollSemester } from "src/student/entities/enroll-semester.entity";

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

    @ManyToMany(() => EnrollSemester, enrollSemester => enrollSemester.student, {cascade: true})
    students: EnrollSemester[];
}
