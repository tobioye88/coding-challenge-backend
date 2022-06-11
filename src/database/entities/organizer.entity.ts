import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organizers')
export class Organizer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}