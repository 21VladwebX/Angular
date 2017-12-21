import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import { AntiHeroes } from '../antiHeroes';
// import { ANTI_HEROES } from '../mock-antiHeroes';
import { AntiHeroesService } from '../anti-heroes.service'

@Component({
  selector: 'app-anti-heroes',
  templateUrl: './anti-heroes.component.html',
  styleUrls: ['./anti-heroes.component.css']
})
export class AntiHeroesComponent implements OnInit {

  antiHeroes : AntiHeroes[] ;

  // selectedHero: Hero;

  // constructor(private antiHeroService: AntiHeroesService) { }

  // getHeroes(): void {   WWWWWWWWWWWWTTTTTTTTTTTTTTTTTFFFFFFFFFFFFFFFF!!!!!!!!!!!!!!
  //   this.antiHeroService.getHeroes()
  //       .subscribe((antiHeroes: AntiHeroes ) => this.AntiHeroes = antiHeroes);
  // }

    constructor(private antiHeroesService: AntiHeroesService,
                private http: HttpClient){}
      
    ngOnInit(){
        // console.log(` antiHeroes is ${this.antiHeroes}`);
        // this.antiHeroesService.getHeroes()
        //   .subscribe((antiHeroes:AntiHeroes[]) => this.antiHeroes = antiHeroes);
       
       this.antiHeroesService.getHeroes().subscribe((antiHeroes:AntiHeroes[]) => this.antiHeroes = antiHeroes);
        console.log(this.antiHeroes);  
    }


  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  //
  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.antiHeroService.addAntiHero({ name } as AntiHeroes)
  //     .subscribe(hero => {
  //       this.antiHeroes.push(hero);
  //     });
  // }
  //
  // delete(hero: AntiHeroes): void {
  //   this.heroes = this.antiHeroes.filter(h => h !== hero);
  //   this.antiHeroService.deleteAntiHero(hero).subscribe();
  // }
}
