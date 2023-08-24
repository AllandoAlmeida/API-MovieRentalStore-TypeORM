import { Request, Response } from "express";
import { Movie } from "../entities";
import {
  addNewMovies,
  deleteMovieById,
  listMovies,
  updateMovieById,
} from "../services/movie.services";
import { MovieSearch, MovieUpDate } from "../interfaces/movie.interfaces";
import { Pagination } from "../interfaces/pagination.interfaces";

export const createMovie = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const newMovies: Movie = await addNewMovies(request.body);

  return response.status(201).json(newMovies);
};

export const searchAllMovies = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { pagination } = response.locals;
  const movies: Pagination = await listMovies(pagination);

  return response.status(200).json(movies);
};

export const upDateMovie = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { existingId } = response.locals;
  const { body } = request;

  const movie: Movie = await updateMovieById(existingId, body);
  return response.status(200).json(movie);
};

export const deleteMovie = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await deleteMovieById(response.locals.existingId);
  return response.status(204).json();
};
