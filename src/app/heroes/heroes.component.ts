import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/assets/Data/mock-heroes';
import { Hero } from '../model/heroes';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
      //this.heroes = this.heroService.getHeroes();
      this.heroService.getHeroes().subscribe(h => this.heroes = h );
    }

  selectedhero?: Hero;
  onSelect(h: Hero): void {
    this.selectedhero = h;
  }

}

