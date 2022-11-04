import * as fromReducer from './book.reducer'
import {
    retrieveBook,
    addBook,
    editBook
} from '../actions/book.actions'

import { BooksService } from 'src/app/core/services/books.service'

describe('bookReducer', () => {
    describe('unknown action', () => {
        it('should return the default state',() => {
          
          const { initialState } = fromReducer
          const action = {
            type: 'unknown'
          };
          
          const state = fromReducer.booksReducer(initialState, action)

          expect(state === initialState)
        })
    })

    describe
})