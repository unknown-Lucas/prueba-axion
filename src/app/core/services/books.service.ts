import { Injectable } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { LIBRARY } from 'src/app/core/library/biblioteca';
import { Store } from '@ngrx/store';
import { selectBooks } from 'src/app/state/selectors/book.selector';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  repo: Book[] = LIBRARY

  constructor(private STORE:Store) { }

  getBooks(): Book[] {
    return [...this.repo.sort((a,b) => a.id - b.id)];
  }

  idGenerator(){
    let idArr : number[] = []
    this.STORE.select(selectBooks).subscribe(res => {idArr = res.map((book:Book) => book.id)})
    return Math.max(...idArr)+1
  }
}
