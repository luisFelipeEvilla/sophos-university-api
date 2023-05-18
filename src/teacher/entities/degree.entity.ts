import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Teacher } from "./teacher.entity";

@Entity()
export class Degree {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    earned_at: Date;

    @OneToOne(() => Teacher)
    @JoinColumn()
    teacher: Teacher;
}