import { Component } from '@angular/core';
import { User } from '../model/user'
import { NgFor } from '@angular/common';
import { STRING_TYPE } from '@angular/compiler';
import {ActivatedRoute}  from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-listeusercomponent',
  templateUrl: './listeusercomponent.component.html',
  styleUrls: ['./listeusercomponent.component.css']
})
export class ListeusercomponentComponent  {
  liste:User[];
   //injecter le service ActivatedRoute dans ce composant
  //sous le nom de ac 
  category:string='';
  constructor(private ac:ActivatedRoute,private us1:UserService){
    console.log("constructor");
    
 
   }
   //methode hook qui fait partie de cycle de vie d'un composant 
   //appelle automatiquement 
   ngOnInit(){
     this.us1.getUserFromDB().subscribe((res:User[])=>this.liste=res);
     this.liste=this.us1.getall();
    //console.log(this.ac.snapshot.params['category']);
    console.log("initailasiation listysercopoent");
    //this.category=this.ac.snapshot.params['category'];
    this.ac.paramMap.subscribe(res=>this.category=res.get('category'))// permet de surveiller les changements du paramètre de route "category" et de mettre à jour la variable "this.category" du composant à chaque changement. 
   } 
 addUser(){
  let u =new User();
  u.firstName="f1";
  u.lastName="l1";
  this.us1.addUserFromDB(u).subscribe();
 }

  
delete(pos:number){
  this.liste.splice(pos,1);
}
property: string ='';

message:string='';
//ghidmti ena 
//cherche(){
  
 
    //const recherche =this.property;
    //for(let u of this.liste){
      
   // if (u.firstName===recherche){
     // this.message='il existe dans la liste ';}
     // else{
      // this.message='il nexiste pas';
      

    
  //}
//}
  
//}

}
