// evenement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EvenementService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    getEvenements(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/events/`);
    }

    getEvenementById(id: string): Observable<any> {
        const url = `${this.baseUrl}/events/${id}`;
        console.log('Request URL:', url);
        return this.http.get<any>(url);
    }


    creerEvenement(evenement: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/events`, evenement);
    }

    modifierEvenement(id: string, evenement: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/events/${id}`, evenement);
    }

    supprimerEvenement(id: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/events/${id}`);
    }

    marquerEvenementTermine(id: string): Observable<any> {
        return this.http.patch<any>(`${this.baseUrl}/events/${id}`, { termine: true });
    }

  rechercherEvenements(termeRecherche: string): Observable<any[]> {
    const url = `${this.baseUrl}/events/recherche?terme=${termeRecherche}`;
    return this.http.get<any[]>(url);
  }


}
