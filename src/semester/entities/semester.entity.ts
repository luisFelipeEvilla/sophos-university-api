import { Student } from "src/student/entities/student.entity";
import { Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semester {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    year: number;

    @PrimaryColumn()
    period: number;
    
    @ManyToMany(() => Student, student => student.semesters)
    @JoinTable()
    students: Student[];
}
