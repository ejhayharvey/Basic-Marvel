import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarvelHeroesService } from 'src/app/services/marvel-heroes.service';
import { MarvelHero } from '../../shared/models/marvel';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  selectedHero: MarvelHero;
  heroName: string;
  heroId: number;
  heroGender: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private marvelHeroService: MarvelHeroesService
  ) {}

  ngOnInit(): void {
    this.getHeroDetail();
  }

  getHeroDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.marvelHeroService.getMarvelHero(id)
      .subscribe(hero => {
        this.selectedHero = hero;
        this.heroName = hero.hero;
        this.heroId = hero.id;
        this.heroGender = hero.gender;
      });
  }

  goBack() {
    this.router.navigate([``]);
  }

}
