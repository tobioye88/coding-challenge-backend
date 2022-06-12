import moment from "moment";
import { IEvent, Weather } from "../interfaces/entities.interface";

export class WeatherService {
  static async getInfo(event: IEvent): Promise<Weather> {
    //Todo: implement this method
    return Promise.resolve({} as Weather);
  }

  static isWeatherNeeded(event: IEvent): boolean {
    return (
      (event.isOutside || false) &&
      moment(event.date).isBetween(moment(), moment().add(7, "days"))
    );
  }
}
