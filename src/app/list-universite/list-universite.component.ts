import { Component } from '@angular/core';
import { Universite } from '../model/universite';
import { UniversiteService } from '../service/universite.service';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent {
  list:Universite[];
  universite:Universite=new Universite();

  universitrtoupdate:Universite={
    iduniveriste:0,
    nomUniversite:"",
    addresse:"",
    foyer:""
  };
  constructor(private us1:UniversiteService){}
  ngOnInit(){
    this.fetchuniversite()
   }
  
    fetchuniversite(){
      this.us1.getUniversiterFromDB().subscribe((res:Universite[])=>this.list=res);
    }

  deleteUniversite(event:any , universite:Universite){
    if(confirm('est ce que vous voulez vraiment supprimer')){
      event.target.innerText="Deleting..."

      this.us1.deleteUniversiteFromDb(universite.iduniveriste).subscribe(()=> this.fetchuniversite());
    }
   
  }
  information(universite:Universite){
    this.universitrtoupdate=universite;
  }  
 
  updateUniversite(){
    this.us1.UpdateUniversite(this.universitrtoupdate).subscribe(()=> this.fetchuniversite());
  }

}
