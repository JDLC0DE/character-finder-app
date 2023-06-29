import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { NgOptimizedImage } from '@angular/common';
import { matMenu, matClose } from '@ng-icons/material-icons/baseline';

import { HeaderComponent } from './organisms/header/header.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { CardComponent } from './molecules/card/card.component';
import { ButtonComponent } from './atoms/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CardComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({ matMenu, matClose }),
  ],
  exports: [HeaderComponent, CardComponent, ButtonComponent],
})
export class ComponentsModule {}
