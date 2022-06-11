import { Request, Response } from "express";

export class EventsController {

  static async getEvents(req: Request, res: Response) {
    res.json({ message: 'hello world' });
  }

}