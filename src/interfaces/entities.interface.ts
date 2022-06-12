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
  weather?: Weather | null;
}

export interface Organizer {
  id?: number;
  name?: string;
}

export interface Weather {
  temperatureInDegreesCelcius: number;
  chanceOfRain: number; //0-100
}
