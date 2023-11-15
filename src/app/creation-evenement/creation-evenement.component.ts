import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EvenementService } from '../evenement.service';

@Component({
  selector: 'app-creation-evenement',
  templateUrl: './creation-evenement.component.html',
  styleUrls: ['./creation-evenement.component.css']
})
export class CreationEvenementComponent {
  formulaire: FormGroup;
  nouvelEvenement: any = { nom: '', dateEcheance: '', priorite: '', commentaire: '' };
  constructor(private fb: FormBuilder, private evenementService: EvenementService) {
    this.formulaire = this.fb.group({
      nom: ['', Validators.required],
      dateEcheance: ['', Validators.required],
      priorite: ['', Validators.required],
    });
  }

  CreerEvenement() {
    // Ajoutez ici la logique pour créer l'événement en utilisant evenementService
    this.evenementService.creerEvenement(this.nouvelEvenement).subscribe(
      () => {
        console.log('Événement créé avec succès');
        // Réinitialiser le formulaire ou rediriger vers une autre page si nécessaire
        this.nouvelEvenement = { nom: '', dateEcheance: '', priorite: '', commentaire: '' };
      },
      error => console.error(error)
    );
    }
  }

