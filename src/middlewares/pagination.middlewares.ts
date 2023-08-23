import { Request, Response, NextFunction } from "express";

export const pagination = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    const queryPage:number = Number(request.query.page);
    const queryPerPage: number = Number(request.query.perPage);

    const page: number = queryPage && queryPage > 1 ? queryPage: 1;
    const perPage: number = queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

    const baseUrl: string = 'http://localhost:3000/movies';
    


    return next()
  }