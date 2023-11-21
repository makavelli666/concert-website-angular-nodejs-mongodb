import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationEvenementComponent } from './creation-evenement/creation-evenement.component';
import { DetailsEvenementComponent } from './details-evenement/details-evenement.component';
import { ModificationEvenementComponent } from './modification-evenement/modification-evenement.component';
import { SuppressionEvenementComponent } from './suppression-evenement/suppression-evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CreationEvenementComponent,
    DetailsEvenementComponent,
    ModificationEvenementComponent,
    SuppressionEvenementComponent,
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
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
