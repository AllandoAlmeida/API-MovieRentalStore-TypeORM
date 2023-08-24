import { Movie } from "../entities";
import { MovieCreate, MovieUpDate } from "../interfaces/movie.interfaces";
import {
  Pagination,
  PaginationParams,
} from "../interfaces/pagination.interfaces";
import { movieRepository } from "../repositories";

export const addNewMovies = async (movieBody: MovieCreate): Promise<Movie> => {
  const newMovie: Movie = await movieRepository.save(movieBody);
  return newMovie;
};

export const listMovies = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<Movie[] | number> =
    await movieRepository.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

    return {
      prevPage: page <= 1 ? null : prevPage,
      nextPage: count - page <= perPage ? null : nextPage,
      count,
      data: movies,
    };
  };
  

export const updateMovieById = async (
  movie: Movie,
  movieBody: MovieUpDate
): Promise<Movie> => {
  return await movieRepository.save({ ...movie, ...movieBody });
};

export const deleteMovieById = async (movie: Movie): Promise<Movie> => {
  return await movieRepository.remove(movie);
};
