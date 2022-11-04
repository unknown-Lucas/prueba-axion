import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/core/models/book';
import { Store } from '@ngrx/store';
import { retrieveBook } from 'src/app/state/actions/book.actions';
import { Observable } from 'rxjs';
import { selectBooks } from 'src/app/state/selectors/books.selector';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  filterValue = ''
  
  /*Bookservice => books Methods */
  constructor( private BOOKSERVICE : BooksService, private STORE:Store) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.STORE.dispatch(retrieveBook({bookCollection:this.BOOKSERVICE.getBooks()}))
  }
}
