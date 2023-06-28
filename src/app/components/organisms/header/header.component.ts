import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  closeNav = true;

  onToggleNav(): void {
    this.closeNav = !this.closeNav;
  }
}
