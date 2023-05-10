import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { OuvrierService } from '../ouvrier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../model/Chantier.model';

@Component({
  selector: 'app-update-ouvrier',
  templateUrl: './update-ouvrier.component.html',
  styleUrls: ['./update-ouvrier.component.css']
})
export class UpdateOuvrierComponent implements OnInit{

updatedChId! : number;
chantiers: Chantier[];
currentOuvrier = new Ouvrier();
constructor(private activatedRoute: ActivatedRoute,
private ouvrierService: OuvrierService,private router :Router) { }
ngOnInit() : void{
  this.ouvrierService.listeChantier().
subscribe(cats => {this.chantiers = cats;
console.log(cats);
});
this.ouvrierService.consulterOuvrier(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentOuvrier = prod; 
this.updatedChId = 
this.currentOuvrier.chantier.idChantier;
} ) ;
}

updateOuvrier()
{ 
  this.currentOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == this.updatedChId)!;
this.ouvrierService.updateOuvrier(this.currentOuvrier).subscribe(prod => {
this.router.navigate(['ouvriers']); }
);
  
}


}
