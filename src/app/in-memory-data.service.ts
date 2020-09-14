import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Homelander' },
      { id: 11, name: 'StarLight' },
      { id: 12, name: 'Queen Maeve' },
      { id: 13, name: 'StormFront' },
      { id: 14, name: 'Black Noir' },
      { id: 15, name: 'Translucent' },
      { id: 16, name: 'A-Train' },
      { id: 17, name: 'The Deep' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}