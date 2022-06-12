import { Request, Response } from "express";
import { IEventRequestQuery } from "../interfaces/events.interface";
import moment from "moment";
import { EventsService } from "../services/events.service";
import { ResponseHelper } from "../helpers/response.helper";
import { WeatherService } from "../services/weather.service";

export class EventsController {
  static async getEvents(req: Request, res: Response) {
    let {
      page = "1",
      size = "20",
      from,
      until,
    } = req.query as IEventRequestQuery;
    from = from || moment().format("YYYY-MM-DD");

    const pageNumber = Math.abs(Number(page));
    const sizeNumber = Math.abs(Number(size));

    // get events
    const pagedEvents = await EventsService.getAllEvents(
      pageNumber,
      sizeNumber,
      from,
      until
    );

    res.json(
      ResponseHelper.paged(
        pagedEvents.events,
        pageNumber,
        sizeNumber,
        pagedEvents.totalResult
      )
    );
  }

  static async getEvent(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const event = await EventsService.getEventById(Number(id));
      event.weather = null;
      if (WeatherService.isWeatherNeeded(event)) {
        event.weather = await WeatherService.getInfo(event);
      }
      res.json(ResponseHelper.success(event));
    } catch (error: any) {
      res.status(400).json(ResponseHelper.error(error, error.message));
    }
  }
}
