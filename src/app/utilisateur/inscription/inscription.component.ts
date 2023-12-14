// inscription.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/authentification/auth.service';  // Assurez-vous que le chemin d'accès est correct
import {Router} from '@angular/router';
@Component({
  selector: 'app-inscription',  // Assurez-vous que le sélecteur correspond à celui que vous utilisez dans vos fichiers HTML
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],  // Assurez-vous que le chemin d'accès est correct
})
export class InscriptionComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}  // Assurez-vous que le service AuthService est correctement injecté

  inscription(form: NgForm): void {
    const { nom, prenom, email, password, confirmPassword } = form.value;

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      console.error('Les mots de passe ne correspondent pas.');
      // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
      return;
    }

    // Appeler le service d'authentification pour l'inscription
    this.authService.inscription(nom, prenom, email, password, 'user')
      .subscribe(
        response => {
          console.log('Inscription réussie !', response);
          // Vous pouvez rediriger l'utilisateur vers une page spécifique après l'inscription si nécessaire
          // Rediriger vers la page d'accueil ou toute autre page nécessaire
          this.router.navigate(['']);
        },
        error => {
          console.error('Erreur lors de l\'inscription', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      );
  }
}
