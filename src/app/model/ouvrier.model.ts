import { Chantier } from "./Chantier.model";

export class Ouvrier {
    idOuvrier? : number;
    nom? : string;
    tel?:String;
    dateEmbauche? : Date ;
    salaire? : number;
    chantier! : Chantier;
    }