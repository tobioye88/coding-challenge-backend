import { Router } from 'express';
import { EventsController } from '../controllers/events.controller';
import { eventsValidator } from '../middleware/validators/events-middleware.validator';


const eventRoute = Router();

eventRoute.get('/events', [eventsValidator], EventsController.getEvents);

export { eventRoute };