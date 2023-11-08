import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlideComponent} from './slide/slide.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ListeusercomponentComponent} from './listeusercomponent/listeusercomponent.component'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:"home",pathMatch:"full"},
  {path:'home', component:SlideComponent},
  {path:'mainusers', component:AccountsComponent , children:[
  {path:'users/:category' , component:ListeusercomponentComponent}]},
  //toujours à placer dans la dernière position
  //NotFound sera chargé si aucun path ne correspond à la liste ci-dessus
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
