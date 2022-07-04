import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/heroes';
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(h => this.heroes = h.slice(1,5));
}
  

}
