import { createReducer, on } from '@ngrx/store';
import { onSearch } from '../actions/filter.actionts';

export const initialState: string = '';

export const filterReducer = createReducer(
  initialState,
  on(onSearch,(oldState, {value}) => {
    return value
  })
)