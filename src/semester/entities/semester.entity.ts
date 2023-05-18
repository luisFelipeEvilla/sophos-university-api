import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Semester {
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryGeneratedColumn()
    year: number;

    @PrimaryGeneratedColumn()
    semester: number;
}
