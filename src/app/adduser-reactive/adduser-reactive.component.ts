import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-adduser-reactive',
  templateUrl: './adduser-reactive.component.html',
  styleUrls: ['./adduser-reactive.component.css']
})
export class AdduserReactiveComponent {
  myForm : FormGroup;
  constructor(private us:UserService ,private fb:FormBuilder,private ac:ActivatedRoute){

  }
  ngOnInit(){
    this.myForm=this.fb.group({
      groupe1:this.fb.group({
      first:["",[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]],
      last:[],
      password:[],
      birthdate:[],
      monemail:[]
      }),
      profession:[],
      category:["", Validators.required]
    })
    this.ac.paramMap.subscribe(res=>{
      this.category.setValue(res.get('category'));
    if (res.get('id')){
       this.us.getUser(Number(res.get('id'))).subscribe(res=>console.log(res)) }
    });
    /*this.myForm= new FormGroup({
      groupe1:new FormGroup({
    first:new FormControl("",[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
    last:new FormControl(),
    birthday:new FormControl(),
    password:new FormControl(),
    category:new FormControl(),
    monemail:new FormControl(),
    profesion:new FormControl("Customer", Validators.required),})
    })*/
  }

  addUser(){
    console.log(this.myForm.value);
    let u:User = new User();
    u.firstName=this.firstName.value;
    u.lastName=this.lastName.value;
    u.birthDate=this.birthdate.value;
    u.profession=this.profession.value;
    u.password=this.password.value;
    u.email=this.email.value;
    u.accountCategory=this.category.value;
  this.us. addUserFromDB(u).subscribe();
  }
  get firstName(){
    return this.myForm.get('groupe1').get('first');
  }
  get lastName(){
    return this.myForm.get('groupe1').get('last');
  }
  get password(){
    return this.myForm.get('groupe1').get('password');
  }
  get email(){
    return this.myForm.get('groupe1').get('monemail');
  }
  get birthdate(){
    return this.myForm.get('groupe1').get('birthdate');
  }
  get profession(){
    return this.myForm.get('profession');
  }
  get category(){
    return this.myForm.get('category');
  }
  
  
}
