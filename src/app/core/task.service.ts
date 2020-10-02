import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasksEndpoint = 'http://localhost:8080/api/v1/tasks';
  
  constructor(private http: HttpClient) { }
  
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksEndpoint);
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
