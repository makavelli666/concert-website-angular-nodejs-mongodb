import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AccueilComponent } from './evenement/accueil/accueil.component';
import { CreationEvenementComponent } from './evenement/creation-evenement/creation-evenement.component';
import { DetailsEvenementComponent } from './evenement/details-evenement/details-evenement.component';
import { ModificationEvenementComponent } from './evenement/modification-evenement/modification-evenement.component';
import { SuppressionEvenementComponent } from './evenement/suppression-evenement/suppression-evenement.component';
import { InscriptionComponent } from './utilisateur/inscription/inscription.component';
import { ConnexionComponent } from './utilisateur/connexion/connexion.component';
import { PagedepaimentComponent} from "./utilisateur/pagedepaiment/pagedepaiment.component";
import { GestionreservationComponent} from "./utilisateur/gestionreservation/gestionreservation.component";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationEvenementComponent,
    DetailsEvenementComponent,
    ModificationEvenementComponent,
    SuppressionEvenementComponent,
    InscriptionComponent,
    ConnexionComponent,
    PagedepaimentComponent,
    GestionreservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'creation', component: CreationEvenementComponent },
      { path: 'details/:id', component: DetailsEvenementComponent },
      { path: 'modification/:id', component: ModificationEvenementComponent },
      { path: 'suppression/:id', component: SuppressionEvenementComponent },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'connexion', component: ConnexionComponent },
      { path: 'paiement/:id', component: PagedepaimentComponent},
      { path: 'réservation/:id', component: GestionreservationComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

