import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private tasksService: TasksService) { }

  tasks = this.tasksService.tasks;

  deleteTask(index: number): void {
    this.tasksService.deleteTask(index);
  }

}
