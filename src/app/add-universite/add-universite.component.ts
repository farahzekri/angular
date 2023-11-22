import { Component } from '@angular/core';
import { UniversiteService } from '../service/universite.service';
import { Universite } from '../model/universite';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  universite:Universite=new Universite();
  constructor(private us:UniversiteService , private ac:ActivatedRoute){}
  ngOnInit(){
    const idUniversite = this.ac.snapshot.params['iduniveriste'];
    this.us.getUniversiteById(idUniversite).subscribe(
      (universite: Universite) => {
        this.universite = universite;
      },
      (error) => {
        console.log("erreur");
      }
    );
  }
  addUniversite(){
    this.us.addUniversiteFromDb(this.universite).subscribe();
  }
}
