import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { of } from 'rxjs';
import { TaskService } from 'src/app/core/task.service';
import { UiKitService } from 'src/app/core/ui-kit.service';
import { Task } from 'src/app/shared/task';

import { NotebookComponent } from './notebook.component';

describe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookComponent ],
      imports: [ ReactiveFormsModule, Ng2FlatpickrModule ],
      providers: [
        { provide: TaskService, useClass: TaskServiceMock },
        { provide: UiKitService, useClass: UiKitServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of tasks', () => {
    expect(component.tasks).toBeDefined();
  });

  it('should show the task list', () => {
    const taskList = debugElement.query(By.css('.task-list'));
    expect(taskList).not.toBeNull();
  });

  it('should show the task description for a task in the list', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    component.tasks = [taskStub];
    fixture.detectChanges();
    
    const firstTask = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(firstTask.nativeElement.textContent).toBe('taskStub');
  });

  it('should prompt for a new task when the "Añadir tarea" button is clicked',
    () => {
      component.promptForNewTask();
      fixture.detectChanges();
      
      const newTaskInput = debugElement.queryAll(By.css('.new-task-form'));

      expect(newTaskInput.length).toBeGreaterThan(0);
    }
  );

  it('should save a new task', () => {
    const taskStub = {
      description: 'taskStub',
      date: new Date(),
      time: new Date(),
      done: false
    };
    component.saveTask(taskStub);
    fixture.detectChanges();

    const newTaskListItem = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(newTaskListItem.nativeElement.textContent).toBe('taskStub');
  });

  it('should dismiss the task form when user clicks on the "X" button', () => {
    component.promptForNewTask();
    fixture.detectChanges();

    const dismissButton = debugElement.query(
      By.css('.dismiss-new-task-button')
    );
    
    dismissButton.nativeElement.click();
    fixture.detectChanges();

    const newTaskInput = debugElement.query(By.css('.new-task-form'));
    expect(newTaskInput).toBeNull();
  });

  it('should show only one input field when "Añadir tarea" is clicked', () => {
    component.promptForNewTask();
    fixture.detectChanges();
    component.promptForNewTask();
    fixture.detectChanges();
    expect(component.newTaskFormArray.length).toBe(1);
  });

  it('should not save an empty task', () => {
    const emptyTaskStub: Task = { description: '        ', done: false };
    component.saveTask(emptyTaskStub);
    fixture.detectChanges();

    const newTaskListItem = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(newTaskListItem).toBeNull();  
  });

  it('should delete a task', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    component.tasks = [taskStub];
    fixture.detectChanges();

    component.deleteTask(taskStub);
    fixture.detectChanges();

    expect(component.tasks.length).toBe(0);
  });
  
  it('should call delete function after confirmation modal', fakeAsync (
      () => {
        const uiKitService = TestBed.inject(UiKitService);
        spyOn(uiKitService, 'createConfirmationModal').and.returnValue(
          Promise.resolve()
        );
        
        const taskStub: Task = { description: 'taskStub', done: false };
        spyOn(component, 'deleteTask');
        component.showDeleteModalForTask(taskStub);
        tick();
        expect(component.deleteTask).toHaveBeenCalledWith(taskStub);
    })
  );

  it(
    'should not delete a task if confimation modal is close with "cancel"',
    fakeAsync(() => {
      const uiKitService = TestBed.inject(UiKitService);
      spyOn(uiKitService, 'createConfirmationModal').and.returnValue(
        Promise.reject()
      );
      
      const taskStub: Task = { description: 'taskStub', done: false };
      spyOn(component, 'deleteTask');
      component.showDeleteModalForTask(taskStub);
      tick();
      expect(component.deleteTask).not.toHaveBeenCalled();
    })
  );

  it('should mark a task as done', () => {
    const taskStub: Task = { description: 'taskStub', done: false };
    component.tasks = [taskStub];
    fixture.detectChanges();

    component.toggleTaskAsDone(taskStub);
    fixture.detectChanges();

    expect(component.tasks[0].done).toBeTrue();    
  });

});

class TaskServiceMock {
  getTasks = () => of([]);
  postTask = (task: Task) => of(task);
  deleteTask = (task: Task) => of({});
  toggleTaskAsDone = (task: Task) => {
    task.done = !task.done;
    return of(task);
  }
}

class UiKitServiceMock {
  useUIkitIcons = () => {};
  createConfirmationModal = (message: string) => {};
}