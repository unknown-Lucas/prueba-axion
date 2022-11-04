import * as fromReducer from './book.reducer'
import {
  retrieveBook,
  addBook,
  editBook
} from '../actions/book.actions'

import { Book } from 'src/app/core/models/book'

describe('bookReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'unknown'
      };
      const state = fromReducer.booksReducer(initialState, action);
      expect(state).toEqual(initialState);
    })
  })

  describe('retrieveBook', () => {
    it('should update the state in an inmutable array', () => {
      const { initialState } = fromReducer;
      const newState: ReadonlyArray<Book> = [{ id: 0, title: 'test', author: 'test', editorial: 'test' }];
      const action = retrieveBook({ bookCollection: newState });
      const state = fromReducer.booksReducer(initialState, action);
      expect(state).toEqual(newState);
    })
  })

  describe('addBook', () => {
    it('should add a element to the state in an inmutable array', () => {
      const { initialState } = fromReducer;
      const newBook: Book = { id: 0, title: 'test', author: 'test', editorial: 'test' };
      const action = addBook({ book: newBook });
      const state = fromReducer.booksReducer(initialState, action);
      expect(state).not.toEqual(initialState);
    })
  })

  describe('editBook', () => {
    it('should edit a element to the state in an inmutable array', () => {
      const initialState : ReadonlyArray<Book>  = [{ id: 0, title: 'test', author: 'test', editorial: 'test' }];
      const newBook: Book = { id: 0, title: 'testEdited', author: 'test', editorial: 'test' };
      const action = editBook({ book: newBook });
      const state = fromReducer.booksReducer(initialState, action);
      expect(state).not.toEqual(initialState);
    })
  })
})