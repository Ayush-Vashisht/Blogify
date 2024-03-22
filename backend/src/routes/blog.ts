import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.post("/api/v1/blog", (c) => {
  return c.json("blogs route");
});
blogRouter.get("/api/v1/blog/:id", (c) => {
  return c.json("blog route");
});
blogRouter.put("/api/v1/blog", (c) => {
  return c.json("blogs route");
});
blogRouter.get("/api/v1/blog/bulk", (c) => {
  return c.json("blog route");
});
