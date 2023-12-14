import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EvenementService } from '../../../services/evenement/evenement.service';

@Component({
  selector: 'app-suppression-evenement',
  templateUrl: './suppression-evenement.component.html',
  styleUrls: ['./suppression-evenement.component.css']
})
export class SuppressionEvenementComponent implements OnInit{
  evenements: any[] = [];
  selectedEvenement: any;
  evenementId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evenementService: EvenementService
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.evenementId = eventId;
      this.getEvenements(); // Retrieve the list of events
      this.getEvenementDetails(); // Retrieve the selected event details
    } else {
      console.error('Identifiant non valide');
      // Handle the case where the identifier is null or undefined
    }
  }

  onSelectEvent(): void {
    if (this.selectedEvenement) {
      const eventId = this.selectedEvenement._id;
      this.router.navigate(['/suppression', eventId]);
    }
  }

  getEvenements(): void {
    this.evenementService.getEvenements().subscribe(
      (data) => {
        console.log('List of Events:', data);
        this.evenements = data;
      },
      (error: any) => {
        console.error(error);
        // Display an error message to the user if necessary
      }
    );
  }

  getEvenementDetails() {
    this.evenementService.getEvenementById(this.evenementId).subscribe(
      (data) => {
        console.log('Event Details:', data);
        this.selectedEvenement = data;
      },
      (error: any) => {
        console.error(error);
        // Display an error message to the user if necessary
      }
    );
  }

  onRemove(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement?')) {
      // Utilisez le service pour supprimer l'événement côté serveur
      this.evenementService.supprimerEvenement(this.selectedEvenement._id).subscribe(
        () => {
          console.log('Événement supprimé avec succès:', this.selectedEvenement);
          // Supprimez l'événement de la liste côté client
          const index = this.evenements.findIndex(e => e._id === this.selectedEvenement._id);
          if (index !== -1) {
            this.evenements.splice(index, 1);
            // Réinitialisez l'événement sélectionné après la suppression
            this.selectedEvenement = null;
          }

          // Navigation vers la page d'accueil après une sauvegarde réussie
          this.router.navigate(['/']);

        },
        error => {
          console.error('Erreur lors de la suppression de l\'événement:', error);
          // Affichez un message d'erreur à l'utilisateur si nécessaire
        }
      );
    }
  }

}


