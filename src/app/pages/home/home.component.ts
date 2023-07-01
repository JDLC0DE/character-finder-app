import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

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
  errorMessage = '';
  isLoading = true;
  inputValue = '';

  constructor(private apiService: ApiService) {}

  loadCharacters(search = '') {
    this.apiService
      .obtenerDatos(`${env.apiUrl}/character?page=${this.page}&name=${search}`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.isLoading = false;
          this.errorMessage = 'Error al cargar los datos';
          return throwError(() => new Error(this.errorMessage));
        })
      )
      .subscribe((data) => {
        this.isLoading = false;
        if (data.results.length > 0) {
          this.errorMessage = '';
        }
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
        if (data.info.next) {
          this.page++;
        }
      });
  }

  onScrollDown() {
    if (this.page > 1) this.loadCharacters(this.inputValue);
  }

  handleSearch(event: any) {
    const value = event.target.value;
    this.inputValue = value;
    if (this.errorMessage === '') {
      this.isLoading = true;
    }
    if (value) {
      this.dataList = [];
      this.page = 1;
      this.loadCharacters(value);
    } else {
      this.dataList = [];
      this.page = 1;
      this.loadCharacters();
    }
  }

  ngOnInit() {
    this.loadCharacters();
  }
}
