import { Component } from '@angular/core';
import { Hero } from '../../../models/heroe.model';

@Component({
  selector: 'app-heroes-list',
  imports: [],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList {
  heroes : Hero[] = [
    {
      id: 1,
      name: 'Spiderman',
      alterEgo: 'Peter Parker',
      power: 80,
      active: true,
      imageUrl: 'img/avatars/spiderman.svg',
      universe: 'Marvel'
    },
    {
      id: 2,
      name: 'Batman',
      alterEgo: 'Bruce Wayne',
      power: 50,
      active: true,
      imageUrl: 'img/avatars/batman.svg',
      universe: 'DC'
    },
    {
      id: 3,
      name: 'Hulk',
      alterEgo: 'Bruce Banner',
      power: 150,
      active: false,   
      imageUrl: 'img/avatars/hulk.svg',
      universe: 'Marvel'
    }
  ];

}
