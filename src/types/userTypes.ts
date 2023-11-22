import { Prisma } from '@prisma/client'
import { TypedRequestBody } from "./expressTypes";

const userPersonalData = Prisma.validator<Prisma.UserDefaultArgs>()({
  select: { password: true, username: true, id: true },
})

export type User = Prisma.UserGetPayload<typeof userPersonalData>

export type ICreateUserBody = TypedRequestBody<{
  username: string;
  password: string;
}>;

export type ISignIn = TypedRequestBody<{
  username: string;
  password: string;
}>;
