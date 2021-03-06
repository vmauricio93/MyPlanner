import { DebugElement, LOCALE_ID } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { of } from 'rxjs';
import { FuseService } from 'src/app/core/fuse.service';
import { TaskService } from 'src/app/core/task.service';
import { UiKitService } from 'src/app/core/ui-kit.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { Task } from 'src/app/shared/task';

import { NotebookComponent } from './notebook.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotebookComponent', () => {
  let component: NotebookComponent;
  let fixture: ComponentFixture<NotebookComponent>;
  let debugElement: DebugElement;
  let taskStub: Task;
  let firstTask: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookComponent ],
      imports: [
        RouterTestingModule,
        SharedModule,
        ReactiveFormsModule,
        Ng2FlatpickrModule
      ],
      providers: [
        { provide: TaskService, useClass: TaskServiceMock },
        { provide: UiKitService, useClass: UiKitServiceMock },
        { provide: FuseService, useClass: FuseServiceMock },
        { provide: LOCALE_ID, useValue: 'es-CO' }
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
      'es-CO', { hour: '2-digit', minute: '2-digit' }
    );
    expect(firstTask.nativeElement.textContent).toContain(time);
  });

  it('should prompt for a new task, creating a new form', () => {
    component.promptForNewTask();
    fixture.detectChanges();
    
    const newTaskInput = debugElement.queryAll(By.css('.new-task-form'));
    expect(newTaskInput.length).toBeGreaterThan(0);
    });

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

  it('should show only one new form when prompting for a new task', () => {
    component.promptForNewTask();
    fixture.detectChanges();
    component.promptForNewTask();
    fixture.detectChanges();
    expect(component.newTaskFormArray.length).toBe(1);
  });

  it('should not save an empty task', () => {
    component.filteredTasks = [];
    taskStub.description = '        ';
    component.saveTask(taskStub);
    fixture.detectChanges();

    const newTaskListItem = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(newTaskListItem).toBeNull();  
  });

  it('should convert the task date and time from array to date when needed', 
    () => {
      const secondTaskStub: any = { ...taskStub };
      secondTaskStub.date = [taskStub.date];
      secondTaskStub.time = [taskStub.time];
      component.saveTask(secondTaskStub);

      expect(component.tasks[1].date.getTime()).toEqual(
        taskStub.date.getTime()
      );
      expect(component.tasks[1].time.getTime()).toEqual(
        taskStub.time.getTime()
      );
    }
  );

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

  it('should have a list of tags for the list of tasks', () => {
    expect(component.tags).toEqual(['taskTag']);
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

  it(`should not remove a tag from suggestions when deleting a task if it is
    present in any other task`, () => {
      component.tasks = [taskStub];

      const secondTaskStub: Task = { ...taskStub };
      component.saveTask(secondTaskStub);

      component.deleteTask(taskStub);
      
      expect(component.tags).toEqual(['taskTag']);
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

  it('should filter tasks by description', () => {
    const secondTaskStub: Task = { ...taskStub };
    secondTaskStub.description = 'secondTask';
    component.saveTask(secondTaskStub);

    const fuseService = TestBed.inject(FuseService);
    spyOn(fuseService, 'searchFromList').and.returnValue([secondTaskStub])

    component.filterTasksByString('seco');
    expect(component.filteredTasks).toEqual([secondTaskStub]);
  });

  it('should not filter tasks if search filter is empty', () => {
    const secondTaskStub: Task = { ...taskStub };
    secondTaskStub.description = 'secondTask';
    component.saveTask(secondTaskStub);

    component.filterTasksByString('      ');
    expect(component.filteredTasks).toEqual(component.tasks);
  });

  // TODO: Are these edit task tests too close to being E2E tests?
  it('should create a form to edit a task', () => {
      const editTaskButton = debugElement.query(By.css('.edit-task-button'))
        .nativeElement;
      editTaskButton.click();
      fixture.detectChanges();

      const editTaskForm = debugElement.query(
        By.css('.task-item > form.edit-task-form')
      );
      const taskItem = debugElement.query(By.css('.task-item > .task-field'));
      
      expect(editTaskForm).not.toBeNull();
      expect(taskItem).toBeNull();
  });

  it(`should leave the edit mode when the edit button is clicked while
    editing a task`, () => {
    const editTaskButton = debugElement.query(By.css('.edit-task-button'))
      .nativeElement;
    editTaskButton.click();
    fixture.detectChanges();
    editTaskButton.click();
    fixture.detectChanges();

    const editTaskForm = debugElement.query(
      By.css('.task-item > form.edit-task-form')
    );
    const taskItem = debugElement.query(By.css('.task-item > .task-field'));
    
    expect(editTaskForm).toBeNull();
    expect(taskItem).not.toBeNull();
  });

  it('should edit a task', () => {
    const editTaskButton = debugElement.query(By.css('.edit-task-button'))
      .nativeElement;
    editTaskButton.click();
    fixture.detectChanges();

    const editTaskDescriptionInput = debugElement.query(
      By.css('.task-item > form.edit-task-form input:first-of-type')
    ).nativeElement;
    editTaskDescriptionInput.value = 'editedDescription';
    editTaskDescriptionInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveEditedTaskButton = debugElement.query(
      By.css('.save-edited-task')
    ).nativeElement;
    saveEditedTaskButton.click();
    fixture.detectChanges();

    const editedTask = debugElement.query(
      By.css('.task-list li:first-of-type')
    );

    expect(editedTask.nativeElement.textContent)
      .toContain('editedDescription');
  });

  it('should not edit a task if its description is empty', () => {
    const editTaskButton = debugElement.query(By.css('.edit-task-button'))
      .nativeElement;
    editTaskButton.click();
    fixture.detectChanges();

    const editTaskDescriptionInput = debugElement.query(
      By.css('.task-item > form.edit-task-form input:first-of-type')
    ).nativeElement;
    editTaskDescriptionInput.value = '        ';
    editTaskDescriptionInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const saveEditedTaskButton = debugElement.query(
      By.css('.save-edited-task')
    ).nativeElement;
    saveEditedTaskButton.click();
    fixture.detectChanges(); 

    const editTaskForm = debugElement.query(
      By.css('.task-item > form.edit-task-form')
    );
    const taskItem = debugElement.query(By.css('.task-item > .task-field'));
    
    expect(editTaskForm).not.toBeNull();
    expect(taskItem).toBeNull();
  });

  it(`should show empty time and date input fields when editing a task that
    doesn't have the time set`, fakeAsync(
      () => {
        taskStub.date = null;
        taskStub.time = null;
        component.filteredTasks = [taskStub];
        fixture.detectChanges();

        const editTaskButton = debugElement.query(By.css('.edit-task-button'))
        .nativeElement;
        editTaskButton.click();
        fixture.detectChanges();

        tick(100);

        const editTimeInput = debugElement.query(
          By.css('.task-item > form.edit-task-form .edit-task-time')
        );
        
        expect(editTimeInput.nativeElement.value).toBe('');
    })
  );

  it(`should show the task list filtered by date and hide the editable task 
    list`, () => {
      component.filterTasksByDate();
      fixture.detectChanges();

      const taskListByDate = debugElement.query(By.css('ul.task-list-by-date'));
      const editableTaskList = debugElement.query(By.css('.task-list'));
      expect(taskListByDate).not.toBeNull();
      expect(editableTaskList).toBeNull();
    }
  );

  it('should show a date heading and the detailed tasks when filtered by date',
   () => {
    component.filterTasksByDate();
    fixture.detectChanges();

    const dateHeading = debugElement.query(By.css('.date-heading'));
    const localeDate = new Date().toLocaleDateString(
      'es-CO',
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );

    expect(dateHeading.nativeElement.textContent).toContain(localeDate);

    }
  );

  it('should sort the tasks in descending order when filtering by date', () => {
    const secondTaskStub: Task = { ...taskStub };
    secondTaskStub.date = new Date();
    secondTaskStub.date.setFullYear(secondTaskStub.date.getFullYear() + 1);
    component.saveTask(secondTaskStub);

    expect(component.dates[0].getTime())
      .toBeGreaterThan(component.dates[1].getTime());
  });

  it('should toggle the visibility of details for a task', () => {
    component.filteredTasks = [taskStub];
    component.toggleDetailsVisibilityForTask(taskStub);
    expect(component.taskDetailsVisibilityForTasks[0]).toBeTrue();
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
  };
  editTask = (task: Task) => of(task);
}

class UiKitServiceMock {
  useUIkitIcons = () => {};
  createConfirmationModal = (message: string) => {};
  createNotification = (options: any) => {};
}

class FuseServiceMock {
  searchFromList = (pattern: string, list: any[], keys: string[]) => [{}];
}