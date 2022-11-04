import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Book } from 'src/app/core/models/book';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';
import { filter, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBooks } from 'src/app/state/selectors/book.selector';
import { editBook } from 'src/app/state/actions/book.actions';
import { selectFilter } from 'src/app/state/selectors/filter.selector';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  tableData$: Observable<Book[]> = new Observable();
  filterValue$: Observable<string> = new Observable();

  /*data injection of the values of the table received from the parent component*/
  /*Getter and setter is to update data when the _tableData value changes*/
  constructor(private _matBottomSheet: MatBottomSheet, private STORE: Store) {
    this.tableData$ = this.STORE.select(selectBooks)
    this.filterValue$ = this.STORE.select(selectFilter)
  }

  editBook(book: Book) {
    this._matBottomSheet.open(NewBookSheetComponent, {
      data: book
    }).afterDismissed()
      .pipe(filter(book => !!book))
      .subscribe(editedBook => {
        this.STORE.dispatch(editBook({ book: editedBook }))
      })
  }
}
