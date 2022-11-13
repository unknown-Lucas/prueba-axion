import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { filter } from 'rxjs';
import { BooksService } from 'src/app/core/services/books.service';
import { Book } from 'src/app/core/models/book';
import { NewBookSheetComponent } from '../new-book-sheet/new-book-sheet.component';

@Component({
  selector: 'app-new-book-button',
  template: `
    <button id="newBookButton" type="button" class="btn btn-circle btn-sm" (click)="openBookSheet()">
      <i class="bi bi-journal-plus"></i>
    </button>
    `,
  styleUrls: ['./new-book-button.component.scss']
})
export class NewBookButtonComponent {
  constructor(private BOOKSERVICE: BooksService, private _bottomSheet: MatBottomSheet) { }

  openBookSheet() {
    this._bottomSheet.open(NewBookSheetComponent)
      .afterDismissed()
      .pipe(filter(book => !!book)) /*check the dismissed bottomSheet return something*/
      .subscribe((newBook: Book) => {
        newBook.id = this.BOOKSERVICE.idGenerator();
        this.BOOKSERVICE.addBook(newBook);
      })
  }
}
