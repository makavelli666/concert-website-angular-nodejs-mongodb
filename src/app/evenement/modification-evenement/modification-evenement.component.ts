//modification-evenement.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../../../services/evenement/evenement.service';

@Component({
  selector: 'app-modification-evenement',
  templateUrl: './modification-evenement.component.html',
  styleUrls: ['./modification-evenement.component.css']
})
export class ModificationEvenementComponent implements OnInit {
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
      this.router.navigate(['/modification', eventId]);
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

  onSave(): void {
    this.evenementService.modifierEvenement(this.selectedEvenement._id, this.selectedEvenement).subscribe(
      (updatedEvent) => {
        console.log('Événement modifié avec succès:', updatedEvent);

        // Mise à jour de l'événement local avec les nouvelles informations
        this.selectedEvenement = updatedEvent;

        // Navigation vers la page d'accueil après une sauvegarde réussie
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erreur lors de la modification de l\'événement:', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur si nécessaire
      }
    );
  }

}
