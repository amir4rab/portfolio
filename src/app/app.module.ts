import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { PagesModule } from './pages/pages.module';
// import { EnModule } from './languages-modules/en/en.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    // EnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
