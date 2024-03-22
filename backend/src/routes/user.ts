import { Hono } from "hono";
import { signupInput, signinInput } from "@Blogify/common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const {success} = await signupInput.safeParse(body);
  return c.json("Signup route");
});
userRouter.post("/signin", (c) => {
  return c.json("Signin route");
});
