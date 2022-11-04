import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { libraryModule } from './modules/library/library.module';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './state/reducers/book.reducer';
import { ROOT_REDUCERS } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    libraryModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
