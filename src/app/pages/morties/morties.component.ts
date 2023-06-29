import { Component, OnInit } from '@angular/core';

import { env } from 'src/envs/env';
import { IData } from 'src/app/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-morties',
  templateUrl: './morties.component.html',
})
export class MortiesComponent implements OnInit {
  page = 1;
  mortiesList: IData[] = [];

  constructor(private apiService: ApiService) {}

  loadMorties() {
    this.apiService
      .obtenerDatos(`${env.apiUrl}/character/?page=${this.page}&name=morty`)
      .subscribe((data) => {
        data.results.forEach((result: any) => {
          this.apiService.obtenerDatos(result.episode[0]).subscribe((data) => {
            this.mortiesList.push({
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
    this.loadMorties();
  }

  ngOnInit() {
    this.loadMorties();
  }
}
