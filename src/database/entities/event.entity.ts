import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Attendee } from "./attendee.entity";
import { Organizer } from "./organizer.entity";


@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @Column()
  isOutside?: boolean;

  @Column({ type: 'date' })
  date?: Date;

  @Column()
  location?: string;

  @ManyToMany(type => Attendee, attendee => attendee.id, { eager: false })
  @JoinTable()
  attendees?: Attendee[]

  @OneToOne(type => Organizer, organizer => organizer.id)
  organizer?: Organizer;

  @CreateDateColumn()
  createdAt?: Date;
}