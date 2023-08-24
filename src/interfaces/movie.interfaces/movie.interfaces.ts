import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { Movie } from "../../entities";
import { moviesSchema } from "../../schemas/movie.schema";

export type MovieCreate = z.infer<typeof moviesSchema>;
export type MovieSearch = Array<Movie>;
export type MovieUpDate = DeepPartial<Movie>
export type MovieRepository = Repository<Movie>