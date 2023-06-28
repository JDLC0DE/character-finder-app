import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() nameOfCharacter = '';
  @Input() status = '';
  @Input() species = '';
  @Input() image = '';
  @Input() location = '';
  @Input() firstApparition = '';
}
