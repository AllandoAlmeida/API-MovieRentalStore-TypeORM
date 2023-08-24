import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { moviesSchema } from "../schemas/movie.schema";
import Movie from "../entities/movies.entity";

export type MovieCreate = z.infer<typeof moviesSchema>;
export type MovieSearch = Array<Movie>;
export type MovieUpDate = DeepPartial<Movie>
export type MovieRepository = Repository<Movie>
