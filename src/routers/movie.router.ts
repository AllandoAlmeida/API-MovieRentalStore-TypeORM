import { Router } from "express";
import { createMovie, deleteMovie } from "../controllers/movie.controllers";
import { checkValidBody } from "../middlewares/checkValidBody.middlewares";
import { checkExistingName } from "../middlewares/checkExistingName.middlewares";
import { moviesCreateSchema } from "../schemas/movie.schema";
import { checkExistingId } from "../middlewares/checkExistingId.middlewares";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  checkExistingName,
  checkValidBody(moviesCreateSchema),
  createMovie
);
movieRouter.delete("/:id", checkExistingId , deleteMovie );
