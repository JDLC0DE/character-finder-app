import { Router, NavigationEnd } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import {
  Component,
  Output,
  Input,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

import { NAV_ITEMS } from 'src/app/utils/constanst';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
  constructor(private router: Router) {}

  @Output() onToggleNav = new EventEmitter<void>();
  @Input() closeNav?: boolean;
  navItems = NAV_ITEMS;
  currentUrl = '';

  ngAfterViewInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        ),
        distinctUntilChanged()
      )
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.url;
      });
  }
}
