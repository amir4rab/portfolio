import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnRoutingModule } from './en-routing.module';
import { EnComponent } from './en.component';
import { PagesModule } from 'src/app/pages/pages.module';



@NgModule({
  declarations: [EnComponent],
  imports: [
    CommonModule,
    EnRoutingModule,
    PagesModule
  ],
  exports: [
    EnComponent
  ]
})
export class EnModule { }
