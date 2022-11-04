import { createFeatureSelector } from '@ngrx/store';

export const selectFilter = createFeatureSelector<string>('filter');
