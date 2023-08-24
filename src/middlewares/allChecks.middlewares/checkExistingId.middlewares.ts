import { NextFunction, Request, Response } from "express";

import { movieRepository } from "../../repositories/repositories";
import { AppError } from "../../errors/AppError.errors";
import { Movie } from "../../entities";

export const checkExistingId = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const existingId: Movie | null = await movieRepository.findOneBy({
    id: Number(request.params.id),
  });

  if (!existingId) throw new AppError("Movie not found", 404);

  response.locals = { ...response.locals, existingId };
  return next();
};
