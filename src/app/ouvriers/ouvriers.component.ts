import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { OuvrierService } from '../ouvrier.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ouvriers',
  templateUrl: './ouvriers.component.html',
  styleUrls: ['./ouvriers.component.css']
})
export class OuvriersComponent implements OnInit{
  ngOnInit(): void {
    this.chargerOuvriers();
  }
 ouvriers : Ouvrier[]; //un tableau de Produit
constructor(private ouvrierService: OuvrierService ,public authService: AuthService) {

}
chargerOuvriers(){
  this.ouvrierService.listeOuvrier().subscribe(prods => {
  console.log(prods);
  this.ouvriers = prods;
  }); 
  }
  supprimerOuvrier(p: Ouvrier)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.ouvrierService.supprimerOuvrier(p.idOuvrier).subscribe(() => {
  console.log("ouvrier supprimé");
  this.chargerOuvriers();
  });
  } 
  


    

}
