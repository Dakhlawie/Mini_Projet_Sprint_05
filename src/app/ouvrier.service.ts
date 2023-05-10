import { Injectable } from '@angular/core';
import { Ouvrier } from './model/ouvrier.model';
import { Chantier } from './model/Chantier.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class OuvrierService {
  apiURL: string = 'http://localhost:58862/ouvriers/api';
  apiURLCat: string = 'http://localhost:58862/ouvriers/cat';

  chantiers!:Chantier[];

  
  constructor(private http : HttpClient) { 
   
  }
listeOuvrier(): Observable<Ouvrier[]>{
    return this.http.get<Ouvrier[]>(this.apiURL);
    }
ajouterOuvrier( prod: Ouvrier):Observable<Ouvrier>{
      return this.http.post<Ouvrier>(this.apiURL, prod, httpOptions);
      }
supprimerOuvrier( id:number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
consulterOuvrier(id: number): Observable<Ouvrier> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Ouvrier>(url);
}
      

  
  

updateOuvrier(prod :Ouvrier) : Observable<Ouvrier>
      {
      return this.http.put<Ouvrier>(this.apiURL, prod, httpOptions);
      }
listeChantier():Observable<Chantier[]>{
        return this.http.get<Chantier[]>(this.apiURL+"/ch");
}
consulterChantier(id:number): Chantier{ 
    return this.chantiers.find(cat => cat.idChantier == id)!;
    }
rechercherParChantier(idCat: number):Observable< Chantier[]> {
      const url = `${this.apiURL}/ouvriesch/${idCat}`;
      return this.http.get<Chantier[]>(url);
      }
ajouterChantier( cat: Chantier):Observable<Chantier>{
        return this.http.post<Chantier>(this.apiURLCat, cat, httpOptions);
}
        
rechercherParNom(nom: string):Observable< Ouvrier[]> {
      const url = `${this.apiURL}/ouvrsByName/${nom}`;
      return this.http.get<Ouvrier[]>(url);
      }
                

      
}
