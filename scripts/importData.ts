import { AppDataSource } from "../src/database/database";
import { Event as Event_ } from "../src/database/entities/event.entity";
import events from "../data/data.json";
import moment from "moment";
import { Organizer as Organizer_ } from "../src/database/entities/organizer.entity";

interface Organizer {
  name: string;
}

interface Event {
  name: string;
  isOutside: boolean;
  location: string;
  date: number;
  organizer: Organizer;
}

export const importData = async () => {
  // Import the data in json format and save in database
  await AppDataSource.initialize();
  console.log("importing data");
  const organizerMap = await getOrganizers(events);

  const repository = AppDataSource.getRepository(Event_);
  for (const event of events) {
    await repository.save(getEvent(event, organizerMap));
  }
  await AppDataSource.destroy();
  console.log("importing data complete");
};

const getEvent = (event: Event, organizerMap: Map<string, Organizer_>) => {
  return {
    ...event,
    date: moment(event.date).toDate(),
    organizer: organizerMap.get(event.organizer.name),
  } as Event_;
};

const getOrganizers = async (events: Event[]) => {
  const organizerRepository = AppDataSource.getRepository(Organizer_);
  const map = new Map<string, Organizer_>();
  for (const event of events) {
    if (!map.has(event.organizer.name)) {
      const organizer = await organizerRepository.save({
        name: event.organizer.name,
      });
      map.set(event.organizer.name, organizer);
    }
  }
  return map;
};

importData().then(() => console.log("finally"));
