import { Movie } from "../entities";
import {
  MovieCreate,
  MovieSearch,

} from "../interfaces/movie.interfaces";
import {movieRepository } from "../repositories";



export const addNewMovies = async (movieBody: MovieCreate): Promise<Movie> => {
  const newMovie: Movie = await movieRepository.save(movieBody);
  return newMovie;
};

export const listMovies = async (): Promise<MovieSearch> => {
  return await movieRepository.find();
};


export const deleteMovieById = async (movie: Movie): Promise<void> => {

  await movieRepository.remove(movie);
};

