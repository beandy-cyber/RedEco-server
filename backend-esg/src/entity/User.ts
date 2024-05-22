import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    role: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;
}
