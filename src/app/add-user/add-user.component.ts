import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user:User= new  User();
  first:string='';
   constructor(private us:UserService ,private ac:ActivatedRoute){
    }

  addUser(){
    this.us.addUserFromDB(this.user).subscribe();
    }
    ngOnInit(){
      this.ac.paramMap.subscribe(res=>{this.user.accountCategory=res.get('category')});
    }
  test (error){
    console.log(error);
  }

}
