import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NewBookSheetComponent } from './components/new-book-sheet/new-book-sheet.component';
import { NewBookButtonComponent } from './components/new-book-button/new-book-button.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [
    TableComponent,
    SearcherComponent,
    NewBookSheetComponent,
    NewBookButtonComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    CoreModule,
    MatIconModule,
    MatBottomSheetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[TableComponent,SearcherComponent,NewBookSheetComponent,NewBookButtonComponent]
})
export class PublicModule { }
