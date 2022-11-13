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
        title: new FormControl('', [Validators.required,Validators.maxLength(40)]),
        author: new FormControl('', [Validators.required,Validators.maxLength(40)]),
        editorial: new FormControl('',[Validators.required,Validators.maxLength(30)])
      })
    } else {
      this.bookForm = new FormGroup({
        title: new FormControl('', [Validators.required,Validators.maxLength(40)]),
        author: new FormControl('', [Validators.required,Validators.maxLength(40)]),
        editorial: new FormControl('',[Validators.required,Validators.maxLength(30)])
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
