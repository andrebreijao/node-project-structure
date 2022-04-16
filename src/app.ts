import express from "express";
// TODO: create paths
//  import hello from "@models/hello"
import hello from "./models/hello";

const app = express();

app.get("/", (req, res) => {
  hello();
  res.send("hello");
});

export default app;
