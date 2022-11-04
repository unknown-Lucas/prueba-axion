import { createAction, props } from "@ngrx/store";
import { Book } from "src/app/core/models/book";

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ book:Book }>()
);

export const editBook =  createAction(
    '[book List] remove Book',
    props<{ book:Book }>()
)

export const retrieveBook = createAction(
    '[Book Retrieve] Retrieve Books',
    props<{ bookCollection: Book[]}>()
)