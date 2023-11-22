import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../types/userTypes";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user: User) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("User creation error");
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );

  return token;
};

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password,  hash)
}