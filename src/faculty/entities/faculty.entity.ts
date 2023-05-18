import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Faculty {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date
}
