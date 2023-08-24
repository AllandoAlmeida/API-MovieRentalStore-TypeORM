import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  searchAllMovies,
  upDateMovie,
} from "../controllers/movie.controllers";
import { checkValidBody } from "../middlewares/checkValidBody.middlewares";
import { checkExistingName } from "../middlewares/checkExistingName.middlewares";
import {
  moviesCreateSchema,
  moviesUpDateSchema,
} from "../schemas/movie.schema";
import { checkExistingId } from "../middlewares/checkExistingId.middlewares";
import { pagination } from "../middlewares/pagination.middlewares";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  checkValidBody(moviesCreateSchema),
  checkExistingName,
  createMovie
  );
  
  movieRouter.patch(
  "/:id",
  checkValidBody(moviesUpDateSchema),
  checkExistingId,
  checkExistingName,
  upDateMovie
);

movieRouter.get("", pagination, searchAllMovies);

movieRouter.delete("/:id", checkExistingId, deleteMovie);
