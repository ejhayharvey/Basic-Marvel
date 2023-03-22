import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelHero } from '../../shared/models/marvel';
import { MarvelHeroes } from '../../shared/mocks/heroesMock';
import { MarvelHeroesService } from '../../services/marvel-heroes.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  
  displayedColumns: string[] = ['number', 'hero', 'id', 'gender', 'actions'];
  dataSource = MarvelHeroes;
  rows: any;
  searchName: string;
  searchId: number;

  constructor(private router: Router, private marvelHeroService: MarvelHeroesService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.marvelHeroService.getMarvelHeroes()
        .subscribe(heroes => this.dataSource = heroes);
  }

  onDetail(selectedHero: MarvelHero) {
    let item = selectedHero;
    this.router.navigate([`details/${item.id}`]);
  }

  onDelete(selectedHero: MarvelHero) {
    this.marvelHeroService.deleteHero(selectedHero.id).subscribe(mar => {
      console.log(mar, 'mar');
      this.getHeroes()
    })
  }

  filterByName(value: string) {
    this.searchName = value;
  }

  filterById(value: number) {
    this.searchId = value;
  }

  filter() {
    const filterRegexp = new RegExp(this.searchName, 'i');
    let nameFilter = this.dataSource;
    if (this.searchName) {
      nameFilter = this.dataSource.filter((data) => {
        return Object.values(data).some((propertyValue) =>
          filterRegexp.test(String(propertyValue))
        );
      });
    }

    let idFilter = this.dataSource;
    if(this.searchId) {
      idFilter = this.dataSource.filter(i => i.id === this.searchId);
    }
   
    const globalFilter = nameFilter.filter((data) =>
    idFilter.includes(data)
    );

    this.dataSource = globalFilter;
    return globalFilter;
  }

}
