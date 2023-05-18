import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Degree } from "./degree.entity";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    birthday: Date;

    @Column()
    facultyId: number;

    @OneToMany(() => Degree, degree => degree.teacher)
    degrees: Degree[];
}
