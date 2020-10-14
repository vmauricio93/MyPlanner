import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksEndpoint = 'http://localhost:8080/api/v1/tasks';
  
  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksEndpoint)
      .pipe(
        tap(tasks => this.formatAllTasksDateAndTime(tasks)),
        tap(tasks => tasks.reverse())
      );
  }

  private formatAllTasksDateAndTime(tasks: Task[]): Task[] {
    tasks.map(task => this.formatTaskDateAndTime(task));
    return tasks;
  }

  private formatTaskDateAndTime(task: Task): Task {
    // The server returns the date as an array of year, month and day
    if (task.date && Array.isArray(task.date)) {
      task.date = new Date(task.date);
    }
    // The server returns the time as a number (timestamp)
    if (task.time && Number.isInteger(task.time)) {
      task.time = new Date(task.time as any * 1000);
    }
    return task;
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksEndpoint, task)
      .pipe(map(task => this.formatTaskDateAndTime(task)));
  }
  
  deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(`${this.tasksEndpoint}/${task.id}`);
  }

  toggleTaskAsDone(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.tasksEndpoint}/${task.id}?action=toggleAsDone`, task
    );
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(
      `${this.tasksEndpoint}/${task.id}?action=edit`, task
    ).pipe(map(task => this.formatTaskDateAndTime(task)));
  }
}
