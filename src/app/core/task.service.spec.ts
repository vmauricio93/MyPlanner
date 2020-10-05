import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TaskService } from './task.service';
import { HttpResponse } from '@angular/common/http';
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

  it('should toggle a task as done in the server', () => {
    const taskStub: Task = { id: 999, description: 'taskStub', done: false };
    service.toggleTaskAsDone(taskStub).subscribe(doneTask => {
      expect(doneTask.done).toBeTrue();
    });

    const req = httpTestingController.expectOne(
      `${tasksEndpoint}/${taskStub.id}`
    );
    expect(req.request.method).toEqual('PUT');
    taskStub.done = true;
    req.flush(taskStub);
  });

  it('should format the date and time of a task', () => {
    const taskStub: Task = {
      description: 'taskStub',
      // toString() to mimic the Date constructor parsing when passing an array
      // to it
      date: new Date([2020, 1, 1].toString()),
      time: new Date(1970, 2, 1, 17, 0),
      done: false
    };
    service.getTasks().subscribe(tasks => {
      expect(tasks[0]).toEqual(taskStub);
    });

    const req = httpTestingController.expectOne(tasksEndpoint);
    expect(req.request.method).toEqual('GET');
    req.flush([{
        description: 'taskStub',
        date: [2020, 1, 1],
        time: [1970, 2, 1, 17, 0],
        done: false
      }]);
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

});
