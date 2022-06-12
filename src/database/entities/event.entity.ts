import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { IEvent } from "../../interfaces/entities.interface";
import { Attendee } from "./attendee.entity";
import { Organizer } from "./organizer.entity";

@Entity("events")
export class Event implements IEvent {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: "varchar" })
  name?: string;

  @Column({ type: "boolean" })
  isOutside?: boolean;

  @Column({ type: "date" })
  date?: Date;

  @Column({ type: "varchar" })
  location?: string;

  @ManyToMany((type) => Attendee, (attendee) => attendee.id, { eager: false })
  @JoinTable()
  attendees?: Attendee[];

  @JoinColumn({ name: "organizer_id" })
  @ManyToOne((type) => Organizer, (organizer) => organizer.id)
  organizer?: Organizer;

  @CreateDateColumn({ name: "created_at", type: "datetime" })
  createdAt?: Date;
}
