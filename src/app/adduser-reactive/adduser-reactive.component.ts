import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-adduser-reactive',
  templateUrl: './adduser-reactive.component.html',
  styleUrls: ['./adduser-reactive.component.css']
})
export class AdduserReactiveComponent {
  myForm : FormGroup;
  ngOnInit(){
    this.myForm= new FormGroup({
      groupe1:new FormGroup({
    first:new FormControl("",[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
    last:new FormControl(),
    birthday:new FormControl(),
    password:new FormControl(),
    category:new FormControl(),
    monemail:new FormControl(),
    profesion:new FormControl("Customer", Validators.required),})
    })
  }
  get firstName(){
    return this.myForm.get('groupe1').get('first');
  }

}
