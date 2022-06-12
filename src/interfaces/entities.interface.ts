export interface IPagedEvent {
  id?: number;
  events?: IEvent[];
  totalResult?: number;
}

export interface IEvent {
  id?: number;
  name?: string;
  isOutside?: boolean;
  location?: string;
  date?: Date;
  organizer?: Organizer;
}

export interface Organizer {
  id?: number;
  name?: string;
}
