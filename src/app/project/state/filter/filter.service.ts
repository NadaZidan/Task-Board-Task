import { Injectable } from '@angular/core';
import { FilterStore, createInitialFilterState } from './filter.store';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private store: FilterStore) {}

  updateSearchTerm(searchTerm: string) {
    this.store.update({
      searchTerm
    });
  }

 
  resetAll() {
    this.store.update((state) => ({
      ...state,
      ...createInitialFilterState()
    }));
  }
}
