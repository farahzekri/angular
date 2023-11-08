import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from '../accounts/accounts.component';
import { ListeusercomponentComponent } from '../listeusercomponent/listeusercomponent.component';


const routes: Routes = [
  {path: '', component:AccountsComponent, children:[
    {path: 'users/:category', component:ListeusercomponentComponent, children:[]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
