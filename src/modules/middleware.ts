import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const handleInputError: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(401);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
