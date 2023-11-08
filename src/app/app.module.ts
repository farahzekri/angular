import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideComponent } from './slide/slide.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FooterComponent } from './footer/footer.component';
import { ListeusercomponentComponent } from './listeusercomponent/listeusercomponent.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import{HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { AdduserReactiveComponent } from './adduser-reactive/adduser-reactive.component'

@NgModule({
  declarations: [//la liste des composants
    AppComponent,
    TestComponent,
    NavbarComponent,
    SlideComponent,
    AccountsComponent,
    FooterComponent,
    ListeusercomponentComponent,
    NotFoundComponent,
    AddUserComponent,
    AdduserReactiveComponent
   
  ],
  imports: [ // la liste des modules utilies 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],//les services
  bootstrap: [AppComponent] //que composant appeler dans le index.html
})
export class AppModule { }
