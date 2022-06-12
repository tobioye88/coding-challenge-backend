import { Request, Response } from "express";
import { IEventRequestQuery } from "../interfaces/events.interface";
import moment from "moment";
import { EventsService } from "../services/events.service";
import { ResponseHelper } from "../helpers/response.helper";

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
}
