// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectToDB } from "./db";
import {  PastMemberModel } from "./db/models";
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

connectToDB();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    name: "Rubiks Club",
    description:
      "Welcome to Rubik Club, the cultural hub of the MCA branch at Maulana Azad National Institute of Technology (MANIT). Our club aims to promote and nurture various talents among the students, providing them with a platform to showcase their skills and creativity.",
  });
});
app.get("/past_members", async (req: Request, res: Response) => {
  const data = await PastMemberModel.find({});
  console.log(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
