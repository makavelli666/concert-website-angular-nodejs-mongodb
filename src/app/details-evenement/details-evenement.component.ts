import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../evenement.service';

@Component({
  selector: 'app-details-evenement',
  templateUrl: './details-evenement.component.html',
  styleUrls: ['./details-evenement.component.css']
})
export class DetailsEvenementComponent implements OnInit {
  evenement: any; // Remplacez 'any' par le type réel de vos événements
  evenementId!: string; // Ajout du point d'exclamation pour indiquer que ce ne sera pas null

  constructor(
    private route: ActivatedRoute,
    private evenementService: EvenementService
  ) { }

  ngOnInit(): void {
    this.evenementId = this.route.snapshot.paramMap.get('id')!; // Ajout du point d'exclamation ici également
    this.getEvenementDetails();
  }

  getEvenementDetails() {
    this.evenementService.getEvenementById(this.evenementId).subscribe(
      data => this.evenement = data,
      error => console.error(error)
    );
  }

  marquerCommeTermine() {
    this.evenementService.marquerEvenementTermine(this.evenementId).subscribe(
      () => {
        console.log('Événement marqué comme terminé avec succès');
        this.getEvenementDetails(); // Rafraîchir les détails après la mise à jour
      },
      error => console.error(error)
    );
  }
}
