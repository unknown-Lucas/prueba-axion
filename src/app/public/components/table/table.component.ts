import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Book } from 'src/app/utils/models/book';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';
import { filter } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  private _tableData: Book[] = [];
  private _filterValue : string = '';

  @Input('filterValue')
  set filterValue(value:string){
    this._filterValue = value
  }

  get filterValue(){
    return this._filterValue
  }

/*data injection of the values of the table received from the parent component*/
/*Getter and setter is to update data when the _tableData value changes*/
  @Input('bookElements')
  set tableData(value: Book[]){
    this._tableData = value;
  }

  get tableData(){
    return this._tableData;
  }
  
  constructor(private _matBottomSheet:MatBottomSheet, private BOOKSERVICE: BooksService) { }
  ngOnInit(): void {
  }

  editBook(book:Book){
    this._matBottomSheet.open(NewBookSheetComponent,{
      data:book
    }).afterDismissed().pipe(filter(book => !!book)).subscribe(book => this.editedBookEmiter.emit(book))
  }
   
  @Output('editBook')
  editedBookEmiter = new EventEmitter<Book>()
}
