import { Component, OnInit } from '@angular/core';

import { env } from 'src/envs/env';
import { IData } from 'src/app/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  page = 1;
  dataList: IData[] = [];

  constructor(private apiService: ApiService) {}

  loadCharacters() {
    this.apiService
      .obtenerDatos(`${env.apiUrl}/character?page=${this.page}`)
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
        this.page++;
      });
  }

  onScrollDown() {
    this.loadCharacters();
  }

  ngOnInit() {
    this.loadCharacters();
  }
}
