import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [
    {
      Title: "Finish angular project",
      Description: "Create a to-do list project"
    }
  ];

  task: Task = {
    Title: '',
    Description: ''
  }

  title = '';
  description = '';

  constructor() {}

  addTask(task: Task): void{
    this.tasks.push(task);
  }

  deleteTask(index: number): void{
    this.tasks.splice(index, 1)
  }

  
}
