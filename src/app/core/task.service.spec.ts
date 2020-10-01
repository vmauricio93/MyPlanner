import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TaskService } from './task.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Task } from '../shared/task';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;
  let tasksEndpoint: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
    tasksEndpoint = 'http://localhost:8080/api/v1/tasks';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET a list of tasks from a server', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    service.getTasks().subscribe(tasks => {
      expect(tasks[0]).toEqual(taskStub);
    });

    const req = httpTestingController.expectOne(tasksEndpoint);
    expect(req.request.method).toEqual('GET');
    req.flush([taskStub]);
    
  });

  it('should POST a task to the server', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    service.postTask(taskStub).subscribe(savedTask => {
      expect(savedTask).toEqual(taskStub);
    });

    const req = httpTestingController.expectOne(tasksEndpoint);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(taskStub);

    const expectedResponse = new HttpResponse({ body: taskStub });
    req.event(expectedResponse);
  });

  it('should DELETE a task from the server', () => {
    const taskStub: Task = { id: 999, description: 'taskStub', done: false };
    service.deleteTask(taskStub).subscribe();

    const req = httpTestingController.expectOne(
      `${tasksEndpoint}/${taskStub.id}`
    );
    expect(req.request.method).toEqual('DELETE');
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

});
