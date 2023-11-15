import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { ListeusercomponentComponent } from '../listeusercomponent/listeusercomponent.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { AdduserReactiveComponent } from '../adduser-reactive/adduser-reactive.component';


const routes: Routes = [
  {path: '', component:AccountsComponent, children:[
    {path: 'users/:category', component:ListeusercomponentComponent, children:[]},
    {path: 'adduser1/:category', component:AddUserComponent},
    {path: 'adduser2/:category', component:AdduserReactiveComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
