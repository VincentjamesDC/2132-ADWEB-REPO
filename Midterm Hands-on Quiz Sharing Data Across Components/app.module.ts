import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Emplist1Component } from './emplist1/emplist1.component';
import { Emplist2Component } from './emplist2/emplist2.component';
import { Emplist3Component } from './emplist3/emplist3.component';
import { EmpserveService } from './empserve.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Emplist1Component,
    Emplist2Component,
    Emplist3Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmpserveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
