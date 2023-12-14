import { Component } from '@angular/core';

@Component({
  selector: 'app-pagedepaiment',
  templateUrl: './pagedepaiment.component.html',
  styleUrls: ['./pagedepaiment.component.css']
})
export class PagedepaimentComponent {
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  amount: number = 0;
  firstName: string = '';
  lastName: string = '';


    processPayment() {
    // Logique de traitement du paiement ici
    console.log('Paiement traité avec succès !');
    console.log('Détails du paiement :', {
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cvv: this.cvv,
      amount: this.amount,
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
}
