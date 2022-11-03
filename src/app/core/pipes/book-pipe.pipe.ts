import { Pipe, PipeTransform } from '@angular/core';
import { Book } from 'src/app/utils/models/book';

@Pipe({
  name: 'bookPipe'
})
export class BookPipe implements PipeTransform {

  transform(list: Book[], args: string): Book[] {
    return list.filter((book:Book) => {return book.title.toLowerCase().includes(args.toLowerCase());});
  }

}
