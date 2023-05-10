import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { OuvrierService } from '../ouvrier.service';
import { Chantier } from '../model/Chantier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ouvrier',
  templateUrl: './add-ouvrier.component.html',
  styleUrls: ['./add-ouvrier.component.css']
})
export class AddOuvrierComponent implements OnInit{
  ngOnInit(): void {
    this.ouvrierService.listeChantier().
subscribe(cats => {this.chantiers = cats;
console.log(cats);
});


  }
  chantiers! : Chantier[];
newIdChantier! : number;
newChantier! : Chantier;
  newOuvrier = new Ouvrier();
  constructor(private ouvrierService: OuvrierService,private router :Router) { }
  addOuvrier(){

    this.newOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == this.newIdChantier)!;
this.ouvrierService.ajouterOuvrier(this.newOuvrier)
.subscribe(prod => {
console.log(prod);
this.router.navigate(['ouvriers']);
});

    
  }
    

}
