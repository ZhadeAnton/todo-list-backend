import { check } from "express-validator";

export const userValidation = () => {
  return [check("username").exists().isString(), check("password").exists().isString()];
};
