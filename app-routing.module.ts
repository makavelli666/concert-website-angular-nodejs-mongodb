import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { CreationEvenementComponent } from './creation-evenement/creation-evenement.component';
import { DetailsEvenementComponent } from './details-evenement/details-evenement.component';
import { ModificationEvenementComponent } from './modification-evenement/modification-evenement.component';
import { SuppressionEvenementComponent } from './suppression-evenement/suppression-evenement.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'creation/:id', component: CreationEvenementComponent },
  { path: 'details/:id', component: DetailsEvenementComponent },
  { path: 'modification/:id', component: ModificationEvenementComponent },
  { path: 'suppression/:id', component: SuppressionEvenementComponent },
  // on peut add autres routes si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
