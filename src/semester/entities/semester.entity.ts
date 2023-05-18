import { EnrollSemester } from "src/student/entities/enroll-semester.entity";
import { Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semester {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    year: number;

    @PrimaryColumn()
    period: number;
    
    @OneToMany(() => EnrollSemester, enrollSemester => enrollSemester.semester)
    students: EnrollSemester[];
}
