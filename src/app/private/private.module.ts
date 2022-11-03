import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PublicModule } from '../public/public.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MainViewComponent,
  ],
  imports: [
    CommonModule,
    PublicModule,
    MatIconModule,
  ],
  exports:[MainViewComponent]
})
export class PrivateModule { }
