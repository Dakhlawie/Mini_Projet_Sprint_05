import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuvriersComponent } from './ouvriers/ouvriers.component';
import { AddOuvrierComponent } from './add-ouvrier/add-ouvrier.component';
import { UpdateOuvrierComponent } from './update-ouvrier/update-ouvrier.component';
import { RechercheParChantierComponent } from './recherche-par-chantier/recherche-par-chantier.component';
import { ListeChantiersComponent } from './liste-chantiers/liste-chantiers.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { OuvrierGuard } from './ouvrier.guard';

const routes: Routes = [
  {path: 'ouvriers', component:OuvriersComponent},
  {path:'add-ouvrier',component:AddOuvrierComponent,canActivate:[OuvrierGuard]},
  { path: "", redirectTo: "ouvriers", pathMatch: "full" },
  {path: "updateOuvrier/:id", component: UpdateOuvrierComponent},
  {path:"rechercheParChantier",component:RechercheParChantierComponent},
  {path:"listeChantiers",component:ListeChantiersComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path:"login",component:LoginComponent},
  {path:"app-forbidden",component:ForbiddenComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

    
 }
