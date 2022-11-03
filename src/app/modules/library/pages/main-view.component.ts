import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  library : Book[] = [];
  filterValue = ''
  
  /*Bookservice => books Methods */
  /*_bottomSheet => to action the bottomSheet*/ 
  constructor( private BOOKSERVICE : BooksService, ) { }

  ngOnInit(): void {
    this.library = this.BOOKSERVICE.getBooks();
  }

  addBook(book:Book){
    this.library = this.BOOKSERVICE.saveBook(book)
  }

  editBook(book:Book){
    this.library = this.BOOKSERVICE.editBook(book)
  }

  handleFilterChange(value:string){
    this.filterValue = value
  }

}
