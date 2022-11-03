import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { filter } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/utils/models/book';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';

@Component({
  selector: 'app-new-book-button',
  templateUrl: './new-book-button.component.html',
  styleUrls: ['./new-book-button.component.scss']
})
export class NewBookButtonComponent {

  constructor( private BOOKSERVICE : BooksService, private _bottomSheet: MatBottomSheet) { }

  openBookSheet() {
    const bottomSheetRef = this._bottomSheet.open(NewBookSheetComponent)
    bottomSheetRef.afterDismissed()
    .pipe(filter(book => !!book)) /*check the dismissed bottomSheet return something*/
    .subscribe((newBook: Book)=> {
      this.newBookEmitter.emit(newBook)
    })
  }

  @Output('bookAdded') 
  newBookEmitter = new EventEmitter<Book>();
}
