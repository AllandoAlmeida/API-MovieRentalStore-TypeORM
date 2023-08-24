import { Request, Response, NextFunction } from "express";
import { movieRepository } from "../repositories";
import { AppError } from "../errors/AppError.errors";

export const checkExistingName = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = request.body;

  const movie = await movieRepository.findOneBy({
    name: name
})

if (!name) return next()

if (movie) {
    throw new AppError( "Movie already exists.", 409)
}

return next()
}
