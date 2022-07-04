import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/heroes';
import { HeroService } from '../Services/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 // @Input() hero?: Hero;
  hero?:Hero;

  constructor(private route: ActivatedRoute,
    private heroServices: HeroService,
    private location: Location)
     { }

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'))
    this.heroServices.getHero(id).subscribe(h => this.hero = h)

  }

  goBack(){
     this.location.back();
  }


}
