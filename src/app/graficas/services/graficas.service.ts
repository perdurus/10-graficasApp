import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }

  getUsersRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');

  }

  getDataRRSS(){
    return this.getUsersRedesSociales().pipe(
      delay(1500),
      map( d =>{ 
        const labels = Object.keys(d);
        const values = Object.values(d);
        return {labels, values};
      })
    );
  }
}
