import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksEndpoint = 'http://localhost:8080/api/v1/tasks';
  
  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksEndpoint)
      .pipe(tap(tasks => this.formatTasksDateAndTime(tasks)));
  }

  private formatTasksDateAndTime(tasks: Task[]): Task[] {
    tasks.map(task => {
      if (task.date && Array.isArray(task.date)) {
        task.date = new Date(task.date);
      }

      if (task.time && Array.isArray(task.time)) {
        const time: [number] = task.time as any;
        task.time = new Date(...time);
      }
    });
    return tasks;
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksEndpoint, task);
  }
  
  deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(`${this.tasksEndpoint}/${task.id}`);
  }

  toggleTaskAsDone(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.tasksEndpoint}/${task.id}`, task);
  }
}
