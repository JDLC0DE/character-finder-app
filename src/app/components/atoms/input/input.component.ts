import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SizeType } from 'src/app/models/base';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() inputSize: SizeType = 'md';
  @Input() placeholder = '';
  @Input() type = 'text';
  @Output() onChange = new EventEmitter<any>();

  getInputContainerClass() {
    return {
      'h-9': this.inputSize === 'sm',
      'h-11': this.inputSize === 'md',
      'h-[52px]': this.inputSize === 'lg',
    };
  }

  getInputClass() {
    return {
      'text-base px-4': this.inputSize === 'sm',
      'px-[18px]': this.inputSize === 'md',
      'text-lg': this.inputSize === 'md' || this.inputSize === 'lg',
      'px-5': this.inputSize === 'lg',
    };
  }

  handleChange(event: any) {
    this.onChange.emit(event);
  }
}
