import { NextFunction, Request, Response } from "express";

import { movieRepository } from "../repositories";
import { AppError } from "../errors/AppError.errors";
import { Movie } from "../entities";

export const checkExistingName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void | Response> => {
  const existingName: Movie | null = await movieRepository.findOne({
    where: { name: request.body.name },
  });

  if (existingName) {
    throw new AppError("Movie already exists.", 409);
  }
  console.log(existingName)

  return next();
};
