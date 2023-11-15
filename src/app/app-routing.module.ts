import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlideComponent} from './slide/slide.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ListeusercomponentComponent} from './listeusercomponent/listeusercomponent.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdduserReactiveComponent } from './adduser-reactive/adduser-reactive.component';


const routes: Routes = [
  {path:'', redirectTo:"home",pathMatch:"full"},
  {path:'home', component:SlideComponent},
  {path:'mainusers', component:AccountsComponent , children:[
  {path:'users/:category' , component:ListeusercomponentComponent},
  {path:'adduser1/:category',component:AddUserComponent},
  {path:'adduser2/:category',component:AdduserReactiveComponent}
 
 ]},
  //toujours à placer dans la dernière position
  //NotFound sera chargé si aucun path ne correspond à la liste ci-dessus
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
