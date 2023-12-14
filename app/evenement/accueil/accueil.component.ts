import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../../../services/evenement/evenement.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from "../../../services/authentification/auth.service";
import { ActivatedRoute} from "@angular/router";
import { UserService} from "../../../services/utilisateur/user.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  termeRecherche: string = '';
  evenements: any[] = [];
  tousLesEvenements: any[] = [];
  critereTri: string = 'nom';

  userId: string='';
  userName: string = '';
  utilisateur: any;
  constructor(private evenementService: EvenementService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.evenementService.getEvenements().subscribe(
      data => {
        console.log('Réponse du serveur :', data);
        this.evenements = data;
        this.tousLesEvenements = data;
        this.trierEvenements(); // Initialiser le tri
      },
      error => {
        console.error('Erreur lors de la récupération des événements:', error);
      }
    );

    // Subscribe to the user ID changes
    this.userService.getUserId().subscribe(userId => {
      // Use the user ID as needed
      this.userId = userId;
      // Call other methods that depend on the user ID
    });

    // Subscribe to the user ID changes
    this.userService.getUserName().subscribe(userName => {
      // Use the user ID as needed
      this.userName = userName;
      // Call other methods that depend on the user ID
    });
  }


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  isUser(): boolean {
    return this.authService.getUserRole() === 'user';
  }

  isAdmin(): boolean{
    return this.authService.getUserRole()==='admin';
  }


  onSave() {
    if (!this.termeRecherche.trim()) {
      this.evenements = [...this.tousLesEvenements];
      this.trierEvenements(); // Retri après la recherche
      return;
    }

    const termeRechercheLower = this.termeRecherche.toLowerCase();

    this.evenementService.rechercherEvenements(termeRechercheLower).subscribe(
      data => {
        this.evenements = data;
        this.trierEvenements(); // Retri après la recherche
      },
      error => {
        console.error('Erreur lors de la recherche des événements :', error);
      }
    );
  }

  onTriChange() {
    this.trierEvenements();
  }

  trierEvenements() {
    switch (this.critereTri) {
      case 'nom':
        this.evenements.sort((a, b) => a.nom.localeCompare(b.nom));
        break;
      case 'date':
        this.evenements.sort((a, b) => new Date(a.dateEcheance).getTime() - new Date(b.dateEcheance).getTime());
        break;
      case 'prix':
        this.evenements.sort((a, b) => a.prixBillets - b.prixBillets);
        break;
      // Ajoutez d'autres cas si nécessaire
      default:
        // Aucun critère de tri spécifié, ne fait rien
    }
  }

  deconnexion(): void {
    // Logique de déconnexion, par exemple, réinitialiser les informations d'authentification
    // N'oublie pas de rediriger l'utilisateur vers la page de connexion ou la page d'accueil
  }
}
