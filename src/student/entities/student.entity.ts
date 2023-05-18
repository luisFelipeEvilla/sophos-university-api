import { Faculty } from "src/faculty/entities/faculty.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
}