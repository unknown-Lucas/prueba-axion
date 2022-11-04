import { createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/core/models/book';
 
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');
