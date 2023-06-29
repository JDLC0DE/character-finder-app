import { Component, OnInit } from '@angular/core';

import { env } from 'src/envs/env';
import { IData } from 'src/app/models/data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ricks',
  templateUrl: './ricks.component.html',
})
export class RicksComponent implements OnInit {
  page = 1;
  ricksList: IData[] = [];

  constructor(private apiService: ApiService) {}

  loadRicks() {
    this.apiService
      .obtenerDatos(`${env.apiUrl}/character/?page=${this.page}&name=rick`)
      .subscribe((data) => {
        data.results.forEach((result: any) => {
          this.apiService.obtenerDatos(result.episode[0]).subscribe((data) => {
            this.ricksList.push({
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
    this.loadRicks();
  }

  ngOnInit(): void {
    this.loadRicks();
  }
}
