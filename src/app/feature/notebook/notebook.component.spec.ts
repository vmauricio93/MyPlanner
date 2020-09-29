import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Task } from 'src/app/shared/task';

import { NotebookComponent } from './notebook.component';

describe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookComponent ],
      imports: [ ReactiveFormsModule ]
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
    const taskStub: Task = { description: 'taskStub' };
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

});
