import { EnrollSemester } from "src/student/entities/enroll-semester.entity";
import { Entity, ManyToMany, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn, Column } from "typeorm";

@Entity()
export class Semester {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @Column()
    period: number;
    
    @OneToMany(() => EnrollSemester, enrollSemester => enrollSemester.semester)
    students: EnrollSemester[];
}
