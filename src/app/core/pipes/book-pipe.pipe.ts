import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/core/models/book';

@Pipe({
  name: 'bookPipe'
})

export class BookPipe implements PipeTransform {

  transform(list: Readonly<Book[]> | null, args : string | null) : Book[] {
    return list!.filter((book:Book) => { 
      return book.title.toLowerCase().includes(args!.toLowerCase());
    });
  }

}
