import { Student } from "src/student/entities/student.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @OneToMany(() => Student, student => student.faculty, { cascade: true, onDelete: 'SET NULL' })
    students: Student[];
}
