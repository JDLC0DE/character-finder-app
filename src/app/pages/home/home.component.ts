import { Component, OnInit } from '@angular/core';

import { IData } from 'src/app/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  dataList: IData[] = [];

  ngOnInit() {
    this.apiService
      .obtenerDatos('https://rickandmortyapi.com/api/character')
      .subscribe((data) => {
        data.results.forEach((result: any) => {
          this.apiService.obtenerDatos(result.episode[0]).subscribe((data) => {
            this.dataList.push({
              nameOfCharacter: result.name,
              status: result.status,
              species: result.species,
              image: result.image,
              location: result.location.name,
              firstApparition: data.name,
            });
          });
        });
      });
  }
}
