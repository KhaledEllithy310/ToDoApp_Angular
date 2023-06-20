import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  inputValue: string = '';
  @Output() inputFromChild: EventEmitter<string> = new EventEmitter();
  inputToParent() {
    this.inputFromChild.emit(this.inputValue);
    this.inputValue = '';
  }
}
