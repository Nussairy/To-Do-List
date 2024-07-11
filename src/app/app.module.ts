import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { TaskDetailsComponent } from './Components/task-details/task-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addTask', component: AddTaskComponent },
  { path: 'task', component: TaskDetailsComponent },
  { path: 'task/:id', component: TaskDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
