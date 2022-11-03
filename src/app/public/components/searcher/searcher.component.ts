import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  value: string = '';
  search = new UntypedFormControl('');
  
  ngOnInit() {
    /*launch the event when the values of the input change*/
    this.search.valueChanges
      .pipe(debounceTime(250))
      .subscribe((value: string) => this.searchEmitter.emit(value));
  }
  /*Output for the parent component*/
  @Output('onSearch') 
  searchEmitter = new EventEmitter<string>();
}