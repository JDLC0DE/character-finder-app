import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { HomeComponent } from './home/home.component';
import { RicksComponent } from './ricks/ricks.component';
import { MortiesComponent } from './morties/morties.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, RicksComponent, MortiesComponent],
  imports: [CommonModule, ComponentsModule, InfiniteScrollModule],
  exports: [HomeComponent],
})
export class PagesModule {}
