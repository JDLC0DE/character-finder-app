import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RicksComponent } from './ricks/ricks.component';
import { MortiesComponent } from './morties/morties.component';

@NgModule({
  declarations: [HomeComponent, RicksComponent, MortiesComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent],
})
export class PagesModule {}
