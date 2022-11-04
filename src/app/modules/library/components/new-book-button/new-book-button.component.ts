import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { filter } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/core/models/book';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';
import { Store } from '@ngrx/store';
import { addBook } from 'src/app/state/actions/book.actions';

@Component({
  selector: 'app-new-book-button',
  templateUrl: './new-book-button.component.html',
  styleUrls: ['./new-book-button.component.scss']
})
export class NewBookButtonComponent {

  constructor(private BOOKSERVICE: BooksService, private _bottomSheet: MatBottomSheet, private STORE: Store) { }

  openBookSheet() {
    const bottomSheetRef = this._bottomSheet.open(NewBookSheetComponent)
    bottomSheetRef.afterDismissed()
      .pipe(filter(book => !!book)) /*check the dismissed bottomSheet return something*/
      .subscribe((newBook: Book) => {
        newBook.id = this.BOOKSERVICE.idGenerator()
        this.STORE.dispatch(addBook({ book: newBook }))
      })
  }
}
