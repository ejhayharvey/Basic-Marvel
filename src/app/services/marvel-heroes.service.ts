import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { MarvelHero } from '../shared/models/marvel';
import { MarvelHeroes } from '../shared/mocks/heroesMock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesService {

  private baseUrl = '/details';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,  private messageService: MessageService) { }

  getMarvelHeroes(): Observable<MarvelHero[]> {
    const marvel = of(MarvelHeroes);
    return marvel;
  }

  getMarvelHero(id: number): Observable<MarvelHero> {
    const hero = MarvelHeroes.find(h => h.id === id)!;
    return of(hero);
  }

  addHero(hero: MarvelHero): Observable<MarvelHero> {
    return this.http.post<MarvelHero>(this.baseUrl, hero, this.httpOptions);
  }

  updateHero(hero: MarvelHero): Observable<any> {
    return this.http.put(this.baseUrl, hero, this.httpOptions);
  }

  deleteHero(id: number): Observable<MarvelHero> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<MarvelHero>(url, this.httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MarvelHeroService: ${message}`);
  }
}
