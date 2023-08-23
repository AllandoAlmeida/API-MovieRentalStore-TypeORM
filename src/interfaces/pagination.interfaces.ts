import { MovieSearch } from "./movie.interfaces";


export type Pagination = {
    prevPage:string | null;
    nextPage:string | null;
    count:number;
    data:MovieSearch;
};

export type PaginationParams = {
    page:number;
    perPage: number;
    prevPage:string | null;
    nextPage:string | null;
}