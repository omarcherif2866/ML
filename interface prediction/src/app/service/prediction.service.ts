import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class PredictionService {
    private apiUrl = 'https://ec74-34-74-215-122.ngrok-free.app/predict'; // URL ngrok

    constructor(private http: HttpClient) { }
  
    // Fonction pour envoyer les données au serveur Flask et récupérer la prédiction
    predict(modelData: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, modelData);
    }
  }
