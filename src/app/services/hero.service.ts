import { Injectable } from '@angular/core';
import { Hero } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
   // Atributos
  //private heroes: Hero[] = [];

  constructor( private http : HttpClient){}

  public apiUrl = "http://localhost:3000"

  // Métodos disponibles del servicio

  /**
   * Método que retorna la lista completa de Heroes
   */
  public getHeroes() : Observable<Hero []>{
    return this.http.get<Hero[]>(this.apiUrl + "/heroes");
  }

  /**
   * Método que retorna un Hero según la id, o bien undefined si no existe.
   */
  public getHeroById(id: number) : Observable<Hero> {

    return this.http.get<Hero>(`${this.apiUrl}/heroes/${id}`);
   
  }

  public deleteById(id: number){
    
  }
}
