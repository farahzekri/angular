import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddUniversiteComponent,
    ListUniversiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
