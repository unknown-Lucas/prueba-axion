import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Book } from 'src/app/core/models/book';

@Component({
  selector: 'app-new-book-sheet',
  templateUrl: './new-book-sheet.component.html',
  styleUrls: ['./new-book-sheet.component.scss']
})

export class NewBookSheetComponent {

  book: Book = { id: 0, title: '', author: '', editorial: '' };
  bookForm: FormGroup;
  error = false;;

  constructor(private bottomsheet: MatBottomSheetRef<NewBookSheetComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) private bookToEdit: Book) {
    if (this.bookToEdit) {
      this.bookForm = new FormGroup({
        title: new FormControl(this.bookToEdit.title, Validators.required),
        author: new FormControl(this.bookToEdit.author, Validators.required),
        editorial: new FormControl(this.bookToEdit.editorial, Validators.required)
      })
    } else {
      this.bookForm = new FormGroup({
        title: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
        editorial: new FormControl('', Validators.required)
      })
    }
  }

  submitForm() {
    if (this.bookForm.status === 'INVALID') {
      this.error = true;
      return;
    }
    this.book = this.bookForm.value as Book;
    if (this.bookToEdit) this.book.id = this.bookToEdit.id
    return this.bottomsheet.dismiss(this.book);
  }
}