import { Request, Response, RequestHandler } from "express";

export const logTimeNow: RequestHandler = (req: Request, res: Response, next) => {
  console.log("time", new Date().toISOString());
  next();
};
