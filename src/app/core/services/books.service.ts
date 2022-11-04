import { Injectable } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { LIBRARY } from 'src/app/core/library/biblioteca';
import { Store } from '@ngrx/store';
import { selectBooks } from 'src/app/state/selectors/book.selector';
import { addBook, editBook, retrieveBook } from 'src/app/state/actions/book.actions';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  repo: Book[] = LIBRARY

  constructor(private STORE:Store) { }

  getBooks(): Book[] {
    return this.repo.sort((a,b) => { return a.id - b.id;})
  }

  loadBooks(books:Book[]) {
    this.STORE.dispatch(retrieveBook({ bookCollection: books}))
  }

  addBook(newBook: Book){
    this.STORE.dispatch(addBook({ book: newBook }))
  }

  editBook(editedBook:Book){
    this.STORE.dispatch(editBook({book: editedBook}))
  }

  idGenerator(){
    let idArr : number[] = []
    let output = 0
    this.STORE.select(selectBooks).subscribe(res => {idArr = res.map((book:Book) => book.id)})
    if (idArr.length == 0) return output
    return Math.max(...idArr)+1
  }
}
