import { z } from "zod";
import { moviesSchema, moviesUpDateSchema } from "../schemas/movie.schema";
import { Repository } from "typeorm";
import Movie from "../entities/movies.entity";

export type MovieCreate = z.infer<typeof moviesSchema>;
export type MovieSearch = Array<Movie>;
export type MovieUpDate = z.infer<typeof moviesUpDateSchema>
export type MovieRepository = Repository<Movie>
