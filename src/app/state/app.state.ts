import { ActionReducerMap } from "@ngrx/store";
import { Book } from "../core/models/book";
import { booksReducer } from "./reducers/book.reducer";
import { filterReducer } from "./reducers/filter.reducer";

export interface LibraryState {
    books : Book[],
    filter: string
}

export const LIBRARY_REDUCERS: ActionReducerMap<LibraryState> = {
    books: booksReducer,
    filter: filterReducer
}