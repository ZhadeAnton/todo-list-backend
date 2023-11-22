import { RequestHandler } from "express";
import { ICreateUserBody, ISignIn } from "../types/userTypes";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";
import { EErrorTypes, GlobalError } from "../types/errorTypes";
import prisma from "../db";

export const createUser: RequestHandler = async (req: ICreateUserBody, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password)
      }
    });

    if (!user) {
      res.status(401);
      return res.json({ message: "not authorized" });
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    const error = e as GlobalError;
    error.type = EErrorTypes.Auth;
    next(error);
  }
};

export const signIn: RequestHandler = async (req: ISignIn, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username
      }
    });

    if (!user) {
      res.status(401);
      return res.json({ message: "not authorized" });
    }

    const isValid = comparePasswords(req.body.password, user.password);

    if (!isValid) {
      res.status(401);
      return res.json({ message: "not authorized" });
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    const error = e as GlobalError;
    error.type = EErrorTypes.Auth;
    next(error);
  }
};
