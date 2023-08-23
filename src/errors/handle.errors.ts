import "express-async-errors";
import { AppError } from "./AppError.errors";
import { NextFunction, Response, Request } from "express";
import { z } from "zod";
import { EntityNotFoundError } from "typeorm";

export const HandleError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
):Response => {
  if (error instanceof AppError) {
   
    return response.status(error.statusCode).json({ message: error.message });
  }

/*   if(error instanceof EntityNotFoundError) {
    return response.status(404).json({message: 'Movie not found'})
  }
 */
  if (error instanceof z.ZodError) {
  
    return response.status(400).json({ message: error.flatten().fieldErrors });
  }

  console.log(error);
  return response.status(500).json({ message: "Internal Server Error" });
};
