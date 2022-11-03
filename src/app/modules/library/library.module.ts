import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './pages/main-view.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { NewBookButtonComponent } from './components/new-book-button/new-book-button.component';
import { NewBookSheetComponent } from './components/new-book-sheet/new-book-sheet.component';
import { BookPipe } from 'src/app/core/pipes/book-pipe.pipe';

@NgModule({
  declarations: [
    MainViewComponent,
    TableComponent,
    SearcherComponent,
    TableComponent,
    NewBookButtonComponent,
    NewBookSheetComponent,
    BookPipe
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
    MatIconModule,
    MatBottomSheetModule,
  
  ],
  exports:[MainViewComponent]
})
export class libraryModule { }
