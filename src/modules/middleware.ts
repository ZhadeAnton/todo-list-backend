import { EErrorTypes, GlobalError } from "./../types/errorTypes";
import { RequestHandler, ErrorRequestHandler } from "express";
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

export const handleErrors: ErrorRequestHandler = (err: GlobalError, _, res) => {
  switch (err.type) {
    case EErrorTypes.Auth: {
      res.status(401).json({ message: "unathorised" });
    }
    case EErrorTypes.Input: {
      res.status(400).json({ message: "invalid input" });
    }
    default: {
      res.status(500).json({ message: "500 error status" });
    }
  }
};
