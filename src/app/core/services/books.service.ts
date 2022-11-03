import { Injectable } from '@angular/core';
import { Book } from 'src/app/utils/models/book';
import { LIBRARY } from 'src/app/utils/library/biblioteca';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  repo: Book[] = LIBRARY

  constructor() { }

  getBooks(): Book[] {
    return [...this.repo.sort((a,b) => a.id - b.id)];
  }

  saveBook(book:Book) : Book[] {
    book.id = this.idGenerator()
    this.repo.push(book)
    return this.getBooks()
  }

  editBook(book:Book){
    this.deleteBook(book.id)
    this.repo.push(book)
    return this.getBooks()
  }

  deleteBook(bookID: number){
    this.repo = LIBRARY.filter((book) => {return book.id != bookID})
  }

  idGenerator(){
    const IDS = this.repo.map((book:Book) => book.id)
    return Math.max(...IDS)+1
  }
}
