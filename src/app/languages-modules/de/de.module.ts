import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeComponent } from './de.component';
import { PagesModule } from 'src/app/pages/pages.module';
import { deRoutingModule } from './de-routing.module';



@NgModule({
  declarations: [DeComponent],
  imports: [
    CommonModule,
    PagesModule,
    deRoutingModule
  ]
})
export class DeModule { }
