import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent implements OnInit {
  filterValue = ''
  
  /*Bookservice => books Methods */
  constructor( private BOOKSERVICE : BooksService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let data = this.BOOKSERVICE.getBooks()
    this.BOOKSERVICE.loadBooks(data)
  }
}
