import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../../../services/evenement/evenement.service';

@Component({
  selector: 'app-details-evenement',
  templateUrl: './details-evenement.component.html',
  styleUrls: ['./details-evenement.component.css']
})
export class DetailsEvenementComponent implements OnInit {
  evenement: any; // Utilise le type réel de tes événements (laisse-le en 'any' pour l'instant)

  evenementId!: string;

  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService
  ) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId ) {
      this.evenementId = eventId;
      this.getEvenementDetails();
    } else {
      console.error('Identifiant non valide');
      // Traiter le cas où l'identifiant est null ou undefined
    }
  }


  getEvenementDetails() {
    this.evenementService.getEvenementById(this.evenementId).subscribe(
      (data) => {
        console.log('Event Details:', data);
        this.evenement = data;
      },
      (error: any) => {
        console.error(error);
        // Display an error message to the user if necessary
      }
    );
  }

  marquerCommeTermine() {
    this.evenementService.marquerEvenementTermine(this.evenementId).subscribe(
      () => {
        console.log('Événement marqué comme terminé avec succès');
        this.getEvenementDetails();
      },
      (error: any) => {
        console.error(error);
        // Affiche un message d'erreur à l'utilisateur si nécessaire
      }
    );
  }
}
