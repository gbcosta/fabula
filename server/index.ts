import express from "express";
import connectDb from "./db.ts";

const app = express();
const port = 3000;

connectDb();

app.get("/", (_, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
