import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/core/models/book';

@Pipe({
  name: 'bookPipe'
})

export class BookPipe implements PipeTransform {

  transform(list: any, args : any) : Book[] {
    return list.filter((book:Book) => { 
      return book.title.toLowerCase().includes(args.toLowerCase());
    });
  }

}
