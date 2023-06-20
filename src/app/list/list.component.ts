import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() task: any = '';
  @Input() index: number = 0;
  isComplete: any = 'false';
  complete_task(index: any) {
    let toDo = document.getElementById(`task${index}`);
    if (toDo) {
      toDo.classList.toggle('line_through');
      console.log('toDo inside', toDo);
    }
    console.log('toDo after', toDo);
  }

  delete_task(index: any) {
    let container_toDo = document.getElementById(`container${index}`);
    if (container_toDo) {
      container_toDo.remove();
    }
  }
}
