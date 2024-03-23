import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@ayush-vashisht/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = await signupInput.safeParse(body);

  if (!success) {
    c.status(401);
    return c.json({
      message: "Input not correct",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
        name: body.name,
      },
    });
    console.log(user);
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json(token);
  } catch (error) {
    c.status(401);
    console.error(error);
    return c.text("Invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = await signinInput.safeParse(body);
  if (!success) {
    c.status(401);
    return c.json({
      message: "Incorrect Input",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({
        message: "Incorrect creds",
      });
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt);
  } catch (error) {
    console.error(error);
    return c.json("Invalid");
  }
});
