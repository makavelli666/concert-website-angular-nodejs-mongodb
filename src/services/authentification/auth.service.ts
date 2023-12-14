// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRole: string | null = null;
  private userId: string = '';

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  setUserId(id: string): void {
    this.userId = id;
  }

  getUserId(): Observable<string> {
    return of(this.userId);
  }


  setUserRole(role: string): void {
    this.userRole = role;
  }

  getUserRole(): string | null {
    return this.userRole;
  }

  isLoggedIn(): boolean {
    return this.userRole === 'user' || this.userRole === 'admin';
  }

  connexion(id: string, email: string, motDePasse: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/${id}`, { email, motDePasse, role })
      .pipe(
        catchError(error => {
          console.error('Une erreur s\'est produite lors de la connexion:', error);
          throw error;
        })
      );
  }

  inscription(nom: string, prenom: string, email: string, motDePasse: string, role: string): Observable<any> {
    const userData = { nom, prenom, email, motDePasse, role };
    console.log('Données envoyées au serveur :', userData);
    this.setUserId(nom);  // Vous pouvez ajuster cela en fonction de votre logique d'application

    return this.http.post<any>(`${this.baseUrl}/users/`, userData)
      .pipe(
        catchError(error => {
          console.error('Une erreur s\'est produite lors de l\'inscription:', error);
          throw error;
        })
      );
  }


}
