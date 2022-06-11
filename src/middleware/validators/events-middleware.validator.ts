import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ResponseHelper } from "../../helpers/response.helper";
import { IEventRequestQuery } from "../../interfaces/events.interface";

export function eventsValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const query = req.query as IEventRequestQuery;
  const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  const dateErrorMessage = "Only valid date format allowed eg. YYYY-MM-DD";

  const schema = Joi.object({
    page: Joi.number(),
    size: Joi.number(),
    from: Joi.string().pattern(datePattern).message(dateErrorMessage),
    until: Joi.string().pattern(datePattern).message(dateErrorMessage),
  });
  const { error } = schema.validate(query);

  if (error) {
    res.status(400).json(ResponseHelper.error(error, "Invalid Request"));
    return;
  }
  next();
}
