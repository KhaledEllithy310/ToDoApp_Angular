import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent {
  task: string = '';
  list_task: any[] = [];

  inputFromChild(value: any) {
    console.log(value);
    this.task = value;
    this.list_task.push(this.task);
  }
}
