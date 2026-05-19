import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/heroe.model';
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'app-heroes-list',
  imports: [],
  templateUrl: './heroes-list.html',
  styleUrl: './heroes-list.css',
})
export class HeroesList implements OnInit {
  public heroes : Hero[] = [];

  constructor( private heroService: HeroService){
    console.log("Estamos en el constructor");
  }

  ngOnInit(): void {
    console.log("Estamos en el ngOnInit");
    this.heroService.getHeroes().subscribe((datos) => {

      console.log("Llegaron los datos: " , datos);
      this.heroes = datos;
    });
    console.log("Terminamos el ngOnInit");
  }

}
