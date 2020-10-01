import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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
      imports: [ ReactiveFormsModule ],
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
    const formControlValueStub = 'taskStub';
    component.saveTask(formControlValueStub);
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
    component.saveTask('        ');
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
  
  it('should call delete function after confirmation inside a modal', () => {
    pending(); // TODO: test deletion after delete confirmation modal appears
    const taskStub: Task = { description: 'taskStub', done: false };
    spyOn(component, 'deleteTask');
    component.showDeleteModalForTask(taskStub);
    expect(component.deleteTask).toHaveBeenCalledWith(taskStub);
  });

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
  createConfirmationModal = (message: string) => new Promise(() => {});
}