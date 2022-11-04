import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book';

@Pipe({
  name: 'bookPipe'
})

export class BookPipe implements PipeTransform {

  transform(list: Book[] | null, args: string | null) : Book[] {
    if(!list) list = []; 
    return list.filter((book:Book) => { 
      if (args) return book.title.toLowerCase().includes(args.toLowerCase());
      return book.title.toLowerCase().includes('');
    });
  }

}
