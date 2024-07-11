import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from './../../tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})

export class TaskDetailsComponent implements OnInit {

  taskId: any;
  task: any;

  constructor(private activatedRoute: ActivatedRoute, private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.taskId = this.activatedRoute.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
  }

  editTask(title: string, description: string): void {
    if (title && description != '') {
      this.task = {
        Title: title,
        Description: description
      };
      this.tasksService.tasks[this.taskId] = this.task;
      this.router.navigate(['/']);
    }
  }

}
