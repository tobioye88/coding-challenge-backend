import moment from "moment";
import {
  Between,
  FindManyOptions,
  LessThan,
  MoreThan,
  Repository,
} from "typeorm";
import { AppDataSource } from "../database/database";
import { Event } from "../database/entities/event.entity";
import { IEvent } from "../interfaces/entities.interface";

export interface IPagedEvent {
  events: IEvent[];
  totalResult: number;
}

export class EventsService {
  static getEventRepository(): Repository<Event> {
    return AppDataSource.getRepository<Event>(Event);
  }

  static async getAllEvents(
    page: number,
    size: number,
    from?: string,
    until?: string
  ): Promise<IPagedEvent> {
    let filter: FindManyOptions<Event>;
    const fromNumber = moment(from).toDate();
    const untilNumber = until ? moment(until).toDate() : null;
    if (fromNumber && untilNumber) {
      filter = {
        where: {
          date: Between(fromNumber, untilNumber),
        },
      };
    } else if (fromNumber) {
      filter = {
        where: {
          date: MoreThan(fromNumber),
        },
      };
    } else if (untilNumber) {
      filter = {
        where: {
          date: LessThan(untilNumber),
        },
      };
    } else {
      filter = {};
    }
    const eventRepository = EventsService.getEventRepository();
    const totalResult = await eventRepository.count(filter);

    filter.skip = size * (page - 1);
    filter.take = size;
    filter.relations = ["organizer", "attendees"];
    const events = await eventRepository.find(filter);

    return { events, totalResult };
  }
}
