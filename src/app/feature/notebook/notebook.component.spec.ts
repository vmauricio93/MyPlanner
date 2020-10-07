import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { of } from 'rxjs';
import { TaskService } from 'src/app/core/task.service';
import { UiKitService } from 'src/app/core/ui-kit.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Task } from 'src/app/shared/task';

import { NotebookComponent } from './notebook.component';

describe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;
  let debugElement: DebugElement;
  let taskStub: Task;
  let firstTask: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookComponent ],
      imports: [ SharedModule, ReactiveFormsModule, Ng2FlatpickrModule ],
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
    taskStub = {
      description: 'taskStub',
      date: new Date(),
      time: new Date(),
      place: 'taskPlace',
      tag: 'taskTag',
      done: false
    };
    fixture.detectChanges();

    firstTask = debugElement.query(
      By.css('.task-list li:first-of-type')
    );
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

  it('should show the description for a task in the list', () => {   
    expect(firstTask.nativeElement.textContent).toContain('taskStub');
  });

  it('should show the date for a task in the list', () => {
    const date = new Date().toLocaleDateString('es-CO', { year: '2-digit'});
    expect(firstTask.nativeElement.textContent).toContain(date);
  });

  it('should show the time for a task in the list', () => {
    const time = new Date().toLocaleTimeString(
      [], { hour: '2-digit', minute: '2-digit' }
    );
    expect(firstTask.nativeElement.textContent).toContain(time);
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
    component.saveTask(taskStub);
    fixture.detectChanges();

    const secondTask = debugElement.query(
      By.css('.task-list li:nth-of-type(2)')
    );
    expect(secondTask.nativeElement.textContent).toContain('taskStub');
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
    component.tasks = [];
    taskStub.description = '        ';
    component.saveTask(taskStub);
    fixture.detectChanges();

    const newTaskListItem = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(newTaskListItem).toBeNull();  
  });

  it('should delete a task', () => {
    component.tasks = [taskStub];
    component.deleteTask(taskStub);

    expect(component.tasks.length).toBe(0);
  });
  
  it('should call delete function after confirmation modal', fakeAsync (
      () => {
        const uiKitService = TestBed.inject(UiKitService);
        spyOn(uiKitService, 'createConfirmationModal').and.returnValue(
          Promise.resolve()
        );
        
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
      
      spyOn(component, 'deleteTask');
      component.showDeleteModalForTask(taskStub);
      tick();
      expect(component.deleteTask).not.toHaveBeenCalled();
    })
  );

  it('should mark a task as done', () => {
    component.tasks = [taskStub];
    component.toggleTaskAsDone(taskStub);

    expect(component.tasks[0].done).toBeTrue();    
  });

  it('should show the place for a task in the list', () => {
    expect(firstTask.nativeElement.textContent).toContain('taskPlace');
  });

  it('should show a tag for a task in the list', () => {
    expect(firstTask.nativeElement.textContent).toContain('taskTag');
  });

  it('should have a list of places for the list of tasks', () => {
    expect(component.places).toEqual(['taskPlace']);
  });

  it('should not update places if a saved task does not have a place', () => {
    component.places = [];
    taskStub.place = null;
    component.saveTask(taskStub);

    expect(component.places.length).toBe(0);
  });

  it('should update places if the place is not on the list', () => {
    taskStub.place = 'newPlace';
    component.saveTask(taskStub);

    expect(component.places.length).toBe(2);
  });

  it(`should not remove a place from suggestions when deleting a task if it is
    present in any other task`, () => {
      component.tasks = [taskStub];

      const secondTaskStub: Task = { ...taskStub };
      component.saveTask(secondTaskStub);

      component.deleteTask(taskStub);
      
      expect(component.places).toEqual(['taskPlace']);
  });

  it(`should remove a place from suggestions when deleting a task if it is not
  present in any other task`, () => {
    component.tasks = [taskStub];

    const secondTaskStub: Task = { ...taskStub };
    secondTaskStub.place = 'secondPlace';
    component.saveTask(secondTaskStub);
    
    component.deleteTask(taskStub);

    expect(component.places).toEqual(['secondPlace']);
  });

});

class TaskServiceMock {
  getTasks = () => of([{
    description: 'taskStub',
    date: new Date(),
    time: new Date(),
    place: 'taskPlace',
    tag: 'taskTag',
    done: false
  }]);
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