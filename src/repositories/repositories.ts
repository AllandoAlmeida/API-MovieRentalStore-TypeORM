import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { MovieRepository } from "../interfaces/movie.interfaces/movie.interfaces";

export const movieRepository: MovieRepository = AppDataSource.getRepository(Movie);