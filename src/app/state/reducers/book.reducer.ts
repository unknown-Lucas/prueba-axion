import { createReducer, on } from '@ngrx/store';
import { addBook, editBook, retrieveBook } from '../actions/book.actions';
import { Book } from '../../core/models/book';

export const initialState: Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(retrieveBook,(oldState, {bookCollection}) => {
    return bookCollection
  }),
  on(addBook,(state, { book }) => {
    return [...state,book].sort((a,b) => a.id - b.id)
  }),
  on(editBook,(state, { book }) => {
    state = state.filter((element) => {
        return element.id !== book.id
    })
    console.log(state)
    return [...state,book].sort((a,b) => a.id - b.id)
  }) 
)