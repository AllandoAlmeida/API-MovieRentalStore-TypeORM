import { Request, Response, response } from "express";
import { Movie } from "../entities";
import { addNewMovies, deleteMovieById } from "../services/movie.services";

export const createMovie = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newMovies: Movie = await addNewMovies(request.body);

  return response.status(201).json(newMovies);
};

export const deleteMovie = async (
  request: Request,
  reponse: Response
): Promise<Response> => {
  console.log("deleteMovie", reponse.locals.existingId)
  await deleteMovieById(reponse.locals.existingId);
  return response.status(204).json();
};
