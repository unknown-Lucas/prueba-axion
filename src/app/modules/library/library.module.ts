import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './pages/main-view.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from '../../shared/components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { NewBookButtonComponent } from './components/new-book-button/new-book-button.component';
import { NewBookSheetComponent } from './components/new-book-sheet/new-book-sheet.component';
import { BookPipe } from 'src/app/core/pipes/book-pipe.pipe';
import { StoreModule } from '@ngrx/store';
import { LIBRARY_REDUCERS } from 'src/app/state/app.state';

@NgModule({
  declarations: [
    MainViewComponent,
    TableComponent,
    TableComponent,
    NewBookButtonComponent,
    NewBookSheetComponent,
    BookPipe,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule,
    MatIconModule,
    MatBottomSheetModule,
    StoreModule.forRoot(LIBRARY_REDUCERS)
  ],
  exports:[MainViewComponent]
})
export class libraryModule { }
