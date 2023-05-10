import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuvriersComponent } from './ouvriers/ouvriers.component';
import { AddOuvrierComponent } from './add-ouvrier/add-ouvrier.component';
import { FormsModule } from '@angular/forms';
import { UpdateOuvrierComponent } from './update-ouvrier/update-ouvrier.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParChantierComponent } from './recherche-par-chantier/recherche-par-chantier.component';
import { ListeChantiersComponent } from './liste-chantiers/liste-chantiers.component';
import { UpdateChantierComponent } from './update-chantier/update-chantier.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
@NgModule({
  declarations: [
    AppComponent,
    OuvriersComponent,
    AddOuvrierComponent,
    UpdateOuvrierComponent,
    RechercheParChantierComponent,
    ListeChantiersComponent,
    UpdateChantierComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
