import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('attendees')
export class Attendee {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}