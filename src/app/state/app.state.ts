import { ActionReducerMap } from "@ngrx/store";
import { Book } from "../core/models/book";
import { booksReducer } from "./reducers/book.reducer";
import { filterReducer } from "./reducers/filter.reducer";

export interface AppState {
    books : Book[],
    filter: string
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    books: booksReducer,
    filter: filterReducer
}