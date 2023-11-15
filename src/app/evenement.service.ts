import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
 
  private evenements: any[] = [
    {
      id: '1',
      nom: 'Concert: Night of Harmony',
      dateEcheance: '2023-12-01',
      priorite: 'élevée',
      statut: 'en cours',
      commentaire: 'Rejoignez-nous pour une soirée musicale exceptionnelle sous les étoiles.',
      prixBillets: 30,
      genreEvenement: 'Concert',
      artistes: ['Three Dog Night'],
      image: './assets/concert-night.jpg'
    },
    {
      id: '2',
      nom: 'Théâtre: Secrets of Shakespeare',
      dateEcheance: '2023-12-15',
      priorite: 'moyenne',
      statut: 'en cours',
      commentaire: 'Plongez dans l\'univers mystérieux des œuvres inédites de Shakespeare.',
      prixBillets: 25,
      genreEvenement: 'Théâtre',
      artistes: ['Ian McKellen', 'Judi Dench'],
      image: '<img src = ./assets/Shakespeare.jpg>' 
    },

    {
      id: '3',
      nom: 'Conférence: Future Tech Summit',
      dateEcheance: '2023-11-20',
      priorite: 'faible',
      statut: 'terminé',
      commentaire: 'Explorez les dernières innovations technologiques et découvrez le futur de la technologie.',
      prixBillets: 0,
      genreEvenement: 'Conférence',
      artistes: [] , // Pas d'artiste pour une conférence
      image: './assetsFutureTechSummit.jpg'

    },
    {
      id: '4',
      nom: 'Cinéma en Plein Air: Movie Night Extravaganza',
      dateEcheance: '2023-12-10',
      priorite: 'moyenne',
      statut: 'en cours',
      commentaire: 'Profitez d\'une soirée cinématographique magique sous le ciel étoilé.',
      prixBillets: 15,
      genreEvenement: 'Cinéma en Plein Air',
      artistes: [] , // Pas d'artiste pour une projection de film
      image: './assetsMovieNightExtravaganza.jpg'

    },
    {
      id: '5',
      nom: 'Exposition d\'Art: Colors of Expression',
      dateEcheance: '2023-11-25',
      priorite: 'élevée',
      statut: 'en cours',
      commentaire: 'Découvrez une collection unique d\'œuvres d\'art expressives de talents locaux.',
      prixBillets: 10,
      genreEvenement: 'Exposition d\'Art',
      artistes: ['Pablo Picasso', 'Frida Kahlo'],
      image: './assetsColorsofExpression.jpg'

    },
    {
      id: '6',
      nom: 'Spectacle de Danse: Rhythms of the World',
      dateEcheance: '2023-12-05',
      priorite: 'moyenne',
      statut: 'en cours',
      commentaire: 'Laissez-vous emporter par des danses envoûtantes du monde entier.',
      prixBillets: 20,
      genreEvenement: 'Spectacle de Danse',
      artistes: ['Mikhail Baryshnikov', 'Misty Copeland'],
      image: './assetsRhythmsoftheWorld.jpg'

    },
    {
      id: '7',
      nom: 'Atelier Culinaire: Flavors Unleashed',
      dateEcheance: '2023-11-30',
      priorite: 'faible',
      statut: 'en cours',
      commentaire: 'Apprenez à créer des plats délicieux avec des chefs renommés.',
      prixBillets: 50,
      genreEvenement: 'Atelier Culinaire',
      artistes: [] , // Pas d'artiste pour un atelier culinaire
      image: './assetsFlavorsUnleashed.jpg'

    },
    {
      id: '8',
      nom: 'Festival de la Mode: Runway Revolution',
      dateEcheance: '2023-12-08',
      priorite: 'élevée',
      statut: 'en cours',
      commentaire: 'Découvrez les tendances les plus audacieuses lors de notre défilé de mode annuel.',
      prixBillets: 40,
      genreEvenement: 'Festival de la Mode',
      artistes: ['Coco Chanel', 'Alexander McQueen'],
      image: './assetsRunwayRevolution.jpg'

    },
    {
      id: '9',
      nom: 'Comédie Stand-up: Laughter Therapy',
      dateEcheance: '2023-12-18',
      priorite: 'moyenne',
      statut: 'en cours',
      commentaire: 'Une soirée de rires garantis avec les meilleurs humoristes de la scène actuelle.',
      prixBillets: 15,
      genreEvenement: 'Comédie Stand-up',
      artistes: ['Kevin Hart', 'Ali Wong'],
      image: './assetsLaughterTherapy.jpg'

    },
    {
      id: '10',
      nom: 'Séance de Yoga en Plein Air: Zen Retreat',
      dateEcheance: '2023-11-28',
      priorite: 'faible',
      statut: 'en cours',
      commentaire: 'Connectez-vous avec la nature tout en pratiquant le yoga dans un cadre paisible.',
      prixBillets: 5,
      genreEvenement: 'Séance de Yoga en Plein Air',
      artistes: []  ,// Pas d'artiste pour une séance de yoga
      image: './assetsZenRetreat.jpg'

    },
  ];
  




  getEvenements(): Observable<any[]> {
    return of(this.evenements);
  }

  getEvenementById(id: string): Observable<any> {
    const evenement = this.evenements.find(e => e.id === id);
    return of(evenement);
  }

  creerEvenement(evenement: any): Observable<any> {
    // Génération d'un ID simple pour cet exemple
    evenement.id = this.generateId();
    this.evenements.push(evenement);
    return of(evenement);
  }

  modifierEvenement(id: string, evenement: any): Observable<any> {
    const index = this.evenements.findIndex(e => e.id === id);
    if (index !== -1) {
      this.evenements[index] = evenement;
      return of(evenement);
    } else {
      return of(null);
    }
  }

  supprimerEvenement(id: string): Observable<any> {
    const index = this.evenements.findIndex(e => e.id === id);
    if (index !== -1) {
      const deletedEvent = this.evenements.splice(index, 1);
      return of(deletedEvent[0]);
    } else {
      return of(null);
    }
  }

  marquerEvenementTermine(id: string): Observable<any> {
    const index = this.evenements.findIndex(e => e.id === id);
    if (index !== -1) {
      this.evenements[index].termine = true;
      return of(this.evenements[index]);
    } else {
      return of(null);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
