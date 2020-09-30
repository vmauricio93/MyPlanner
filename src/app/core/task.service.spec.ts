import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/task';

describe('TaskService', () => {
  let service: TaskService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(TaskService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET a list of tasks from a server', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    service.getTasks().subscribe(tasks => {
      expect(tasks[0]).toEqual(taskStub);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/v1/tasks'
    );
    req.flush([taskStub]);
    
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

});
