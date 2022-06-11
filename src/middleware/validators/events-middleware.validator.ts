import { NextFunction, Request, Response } from "express";

export function eventsValidator(req: Request, res: Response, next: NextFunction) {
  next();
}