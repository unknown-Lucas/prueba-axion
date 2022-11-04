import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { onSearch } from 'src/app/state/actions/filter.actionts';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private STORE:Store) { }

  handleFilterChange(inputValue:string){
    this.STORE.dispatch(onSearch({ value: inputValue }))
  }
}
