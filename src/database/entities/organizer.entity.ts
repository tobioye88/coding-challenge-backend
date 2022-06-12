import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("organizers")
export class Organizer {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name?: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt?: Date;
}
