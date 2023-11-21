import { Component, OnInit } from '@angular/core';
import { EvenementService } from '..//evenement.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  termeRecherche: string = ''; // pour la recherche
  evenements: any[] = []; // Remplacez 'any[]' par le type réel de vos événements

  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.getEvenements();
  }

  getEvenements() {
    this.evenementService.getEvenements().subscribe(
      data => this.evenements = data,
      error => console.error(error)
    );
  }

  // Ajoutez ici la logique de filtre et tri selon vos spécifications
  // Par exemple, une fonction pour filtrer par statut
  filtrerParStatut(statut: string) {
    this.evenements = this.evenements.filter(e => e.statut === statut);
  }

  // Une fonction pour trier par date d'échéance
  trierParDateEcheance() {
    this.evenements.sort((a, b) => new Date(a.dateEcheance).getTime() - new Date(b.dateEcheance).getTime());
  }

  rechercher() {
    // Implémentez votre logique de recherche ici en utilisant le termeRecherche
    console.log('Terme de recherche : ', this.termeRecherche);
  }


}
