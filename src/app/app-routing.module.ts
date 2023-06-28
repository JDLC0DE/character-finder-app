import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MortiesComponent } from './pages/morties/morties.component';
import { RicksComponent } from './pages/ricks/ricks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ricks', component: RicksComponent },
  { path: 'morties', component: MortiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
