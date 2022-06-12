import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("attendees")
export class Attendee {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;
}
