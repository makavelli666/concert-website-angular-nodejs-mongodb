import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../../services/authentification/auth.service';
import { UserService} from "../../../services/utilisateur/user.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService) {}

  connexion(form: NgForm): void {
    const { name, email, password, role } = form.value;

    this.authService.connexion(name, email, password, role)
      .subscribe(
        response => {
          console.log('Connexion réussie !', response);

          // Set user ID in UserService
          this.userService.setUserId(response.utilisateur._id);

          this.userService.setUserName(response.utilisateur.nom);

          // Wait for the ID to be updated and then log it
          setTimeout(() => {
            console.log('identifiant ===', this.userService.getUserId());
          }, 0);

          // Rediriger vers la page d'accueil ou toute autre page nécessaire
          this.router.navigate(['']);

          // Définir le rôle de l'utilisateur après une connexion réussie (exemple)
          this.authService.setUserRole(response.role);
        },
        error => {
          console.error('Erreur lors de la connexion', error);
          // Gérer l'erreur, par exemple, afficher un message d'erreur à l'utilisateur
        }
      );
  }

}
