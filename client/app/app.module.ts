import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PgNotFoundComponent } from './components/pg-not-found/pg-not-found.component';
import { OopsComponent } from './components/oops/oops.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PgNotFoundComponent,
    OopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
