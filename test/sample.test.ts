import { expect, test, vi } from "vitest";
import { createUser } from "../scripts";
import prisma from "../libs/__mocks__/prisma";

vi.mock("../libs/prisma");

test("createUser should return the generated user", async () => {
  const newUser = {
    username: "user@prisma.io",
    password: "4h5h3#5",
    created: new Date()
  };

  prisma.user.create.mockResolvedValue({
    ...newUser,
    id: "1"
  });

  const user = await createUser(newUser);
  expect(user).toStrictEqual({ ...newUser, id: "1" });
});
