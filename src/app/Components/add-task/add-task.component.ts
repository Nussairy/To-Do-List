import { Component } from '@angular/core';
import { TasksService } from '../../tasks.service';
import { Task } from './../../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {
  
  task: Task = {
    Title: '',
    Description: ''
  }

  constructor(private tasksService: TasksService, private router: Router){}

  saveTask(title: string, description: string): void{
    this.task.Title = title;
    this.task.Description = description;
    this.tasksService.addTask(this.task)
    this.router.navigate(['/']);
  }

}
