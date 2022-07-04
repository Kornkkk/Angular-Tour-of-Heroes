import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from 'src/assets/Data/mock-heroes';
import { Hero } from '../model/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {  
    return of (HEROES); 
  }

   getHero(id: number): Observable<Hero>{
   const hero = HEROES.find(h => h.id ==id)!;
   return of(hero); 
   }

}
