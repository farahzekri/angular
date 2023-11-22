import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUniversiteComponent} from './add-universite/add-universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';

const routes: Routes = [
  {path:"universite",component:ListUniversiteComponent},
  {path:"adduniv", component:AddUniversiteComponent},
  {path:"update/:iduniveriste", component:AddUniversiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
