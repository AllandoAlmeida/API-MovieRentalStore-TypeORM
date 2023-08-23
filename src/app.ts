import "express-async-errors";
import express, { Application, json } from "express";
import { movieRouter } from "./routers/movie.router";
import { HandleError } from "./errors/handle.errors";

export const app: Application = express();
app.use(json());

app.use("/movies", movieRouter);

app.use(HandleError);
