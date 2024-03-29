import { Hono } from "hono";
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupInput, signinInput, SigninType } from "@ayush-vashisht/common";
import { getCookie, setCookie } from "hono/cookie";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  console.log(body);
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
    const token = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    const {id,email,name}=user;
    return c.json({token,id,email,name});
  } catch (error) {
    console.error(error);
    return c.json("Invalid");
  }
});

userRouter.get("/profile", async (c) => {
  const authHeader = c.req.header("authorization") || "";
  // console.log(localStorage.getItem("token"))
  console.log(authHeader);
//   function getTokenFromLocalStorage(): string | null {
//     return localStorage.getItem("token");
// }
// const token = getTokenFromLocalStorage();
// console.log(token)

// console.log(getTokenFromLocalStorage());
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    if (user) {
      // const data = await prisma.user.findFirst(user.id);
      const data = await prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });
      return c.json(data);
    } else c.json(null);
  } catch (error) {
    c.status(403);
    // return c.text("You are not logged in");
    return c.json(error);
  }
});

