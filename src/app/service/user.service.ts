import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { observeNotification } from 'rxjs/internal/Notification';
import { Observable } from 'rxjs';

@Injectable({//décorateur de classe
  providedIn: 'root'    //méta data 3ibara houma les donne ili lezmin pour se fonctionne 
})
export class UserService {

  constructor(private _http:HttpClient) { 
    console.log("je suis user service ")
  }
  getUserFromDB():Observable<User[]>{
    return this._http.get<User[]>("http://localhost:3000/user");
  }
  addUserFromDB(user:User):Observable<User>{
    return this._http.post<User>("http://localhost:3000/user",user);
  }
  UpdateUser(user:User):Observable<User>{
    return this._http.put<User>("http://localhost:3000/user/"+user.id,user);
  }
  getUser(id:number):Observable<User>{
    return this._http.get<User>("http://localhost:3000/users/"+id);
    }
  getall() : User[]{
    return[
      {
        id: 1, 
       firstName: "Mila", 
       lastName: " Kunis", 
       birthDate: "1999-06-30", 
       accountCategory: "Admin", 
       email: "mila@kunis.com", 
       password: "test", 
       picture: "https://bootdey.com/img/Content/avatar/avatar3.png", 
       profession: "Software Engineer" 
       },
       { 
       id: 2, 
       firstName: "George", 
       lastName: "Clooney", 
       birthDate: "1999-06-30", 
       accountCategory: "Customer", 
       email: "marlon@brando.com", 
       password: "test", 
       picture: "https://bootdey.com/img/Content/avatar/avatar2.png", 
       profession: "Software Engineer" 
       }, 
       { 
       id: 3, 
       firstName: "George", 
       lastName: "Clooney", 
       birthDate: "1999-06-30", 
       accountCategory: "Customer", 
       email: "marlon@brando.com", 
       password: "test", 
       picture: "https://bootdey.com/img/Content/avatar/avatar1.png", 
       profession: "Software Engineer" 
       }, 
       { 
       id: 4, 
       firstName: "Ryan", 
       lastName: "Gossling", 
       birthDate:"1999-06-30", 
       accountCategory: "Golden", 
       email: "Ryan@nicholson.com", 
       password: "test", 
       picture: "https://bootdey.com/img/Content/avatar/avatar4.png", 
       profession: "Software Engineer"
       }, 
       { 
       id: 5, 
       firstName: "Robert", 
       lastName: "Downey", 
       birthDate: "1999-06-30", 
       accountCategory: "Blocked Account", 
       email: "robert@nicholson.com", 
       password: "test", 
       picture: "https://bootdey.com/img/Content/avatar/avatar5.png", 
       profession: "Software Engineer" 
       }
      ]
  }

}
