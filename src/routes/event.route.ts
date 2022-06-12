import { Router } from "express";
import { EventsController } from "../controllers/events.controller";
import {
  eventsValidator,
  eventValidator,
} from "../middleware/validators/events-middleware.validator";

const eventRoute = Router();

eventRoute.get("/events", [eventsValidator], EventsController.getEvents);
eventRoute.get("/events/:id", [eventValidator], EventsController.getEvent);

export { eventRoute };
