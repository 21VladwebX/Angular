import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  getHeroes(): void {  /* WWWWWWWWWWWWTTTTTTTTTTTTTTTTTFFFFFFFFFFFFFFFF!!!!!!!!!!!!!!*/
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }



  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}