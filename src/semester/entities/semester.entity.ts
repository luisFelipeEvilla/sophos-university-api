import { EnrollSemester } from "src/student/entities/enroll-semester.entity";
import { Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semester {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    year: number;

    @PrimaryColumn()
    period: number;
    
    @OneToOne(() => EnrollSemester, enrollSemester => enrollSemester.semester)
    students: EnrollSemester[];
}
