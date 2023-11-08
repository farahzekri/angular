import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //injection le service userservicez dans ce composant sou le non de us 
  constructor(private us:UserService){

  }

  title = 'myfirstproject';
  test(){
    alert("efefef")
  }
}
