import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FlatpickrService } from 'src/app/core/flatpickr.service';
import { FuseService } from 'src/app/core/fuse.service';
import { TaskService } from 'src/app/core/task.service';
import { UiKitService } from 'src/app/core/ui-kit.service';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit, AfterViewInit {
  tasks: Task[];
  filteredTasks: Task[];
  places: string[];
  tags: string[];
  dates: Date[];
  
  newTaskFormArray: FormArray = new FormArray([]);
  @ViewChildren('descriptionInput') descriptionInputRef: QueryList<any>;
  private descriptionInputSubscription = new Subscription();

  @ViewChildren('editTaskDate') editDateInputRef: QueryList<any>;
  private editDateInputSubscription = new Subscription();
  @ViewChildren('editTaskTime') editTimeInputRef: QueryList<any>;
  private editTimeInputSubscription = new Subscription();

  editModeForTasks: boolean[];
  editTaskFormArray: FormArray = new FormArray([]);

  searchFormGroup: FormGroup = new FormGroup({ query: new FormControl('') });
  searchPattern: string = "";

  constructor(
    private taskService: TaskService,
    private uiKit: UiKitService,
    private flatpickr: FlatpickrService,
    private fuse: FuseService
  ) { }

  ngOnInit(): void {    
    this.uiKit.useUIkitIcons();
    this.flatpickr.localizeSpanish();
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.filterTasksByString(this.searchPattern);
      this.places = this.extractListOfTasksCommonProperties(tasks, 'place');
      this.tags = this.extractListOfTasksCommonProperties(tasks, 'tag');
      this.dates = this.extractListOfCommonDates(tasks);
      this.sortDatesDescending(this.dates);
    });
  }

  ngAfterViewInit(): void {
    this.descriptionInputSubscription = this.descriptionInputRef.
      changes.subscribe(
      res => {
        if (this.descriptionInputRef.length > 0) {
          this.descriptionInputRef.last.nativeElement.focus();
        }
      }
    );

    this.editDateInputSubscription = this.editDateInputRef.changes.subscribe(
      res => {
        if (this.editDateInputRef.length > 0) {
          setTimeout(() => {
            const date = this.editDateInputRef.last.config.defaultDate;
            this.editDateInputRef.last.flatpickr.setDate(date, true);
          }, 100);
        }
      }
    );

    this.editTimeInputSubscription = this.editTimeInputRef.changes.subscribe(
      res => {
        if (this.editTimeInputRef.length > 0) {
          setTimeout(() => {
            const hour = this.editTimeInputRef.last.config.defaultHour;
            const minutes = this.editTimeInputRef.last.config.defaultMinute;
            if (hour === null || minutes === null) { return; }

            const time = new Date().setHours(hour, minutes);
            this.editTimeInputRef.last.flatpickr.setDate(time, true);
          }, 100);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.descriptionInputSubscription.unsubscribe();
    this.editDateInputSubscription.unsubscribe();
    this.editTimeInputSubscription.unsubscribe();
  }

  filterTasksByString(pattern: string): void {
    if (pattern && pattern.trim().length > 0) {
      this.searchPattern = pattern.trim();
      this.filteredTasks = this.fuse.searchFromList(
        this.searchPattern, this.tasks, ['description', 'place', 'tag']
      );
    } else {
      this.searchPattern = "";
      this.filteredTasks = this.tasks;
    }
    this.resetEditModeForTasks();
  }

  private resetEditModeForTasks(): void {
    this.editModeForTasks = new Array(this.filteredTasks.length).fill(false);
  }

  private extractListOfTasksCommonProperties(
    tasks: Task[], property: string
  ): any[] {
    return [...new Set(
      tasks.filter(task => task[property]).map(task => task[property])
    )];
  }

  private extractListOfCommonDates(tasks: Task[]): Date[] {
    return tasks.filter(task => task.date)
      .map(task => task.date)
      .filter((date, index, self) => index === self.findIndex(d => (
        d.getTime() === date.getTime()
      )));
  }

  private sortDatesDescending(dates: Date[]): Date[] {
    return dates.sort((a, b) => b.getTime() - a.getTime());
  }

  promptForNewTask(): void {
    if (this.newTaskInputPromptExists()) { return; }
    const newFormGroup = this.createNewFormGroupForTask();
    this.newTaskFormArray.push(newFormGroup);
  } 

  private createNewFormGroupForTask(task?: any): FormGroup {
    task = task !== undefined ? task : '';
    return new FormGroup({
      description: new FormControl(task.description || ''),
      date: new FormControl(task.date || ''),
      time: new FormControl(task.time || ''),
      place: new FormControl(task.place || ''),
      tag: new FormControl(task.tag || '')
    });
  }

  private newTaskInputPromptExists(): boolean {
    return this.newTaskFormArray.length > 0;
  }

  saveTask(newTask: Task): void {
    if (this.isTaskDescriptionEmpty(newTask)) { return; }
    newTask = this.formatTaskDateAndTime(newTask);
    newTask.done = false;
    this.taskService.postTask(newTask).subscribe(task => {
      this.tasks.unshift(task);
      this.filterTasksByString(this.searchPattern);
      this.addTaskPropertyToSuggestions(task, 'place', this.places);
      this.addTaskPropertyToSuggestions(task, 'tag', this.tags);
    });
    this.clearTaskChanges();
  }

  private isTaskDescriptionEmpty(task: Task): boolean {
    return task.description.trim().length == 0;
  }

  private formatTaskDateAndTime(task: Task): Task {
    task.date = task.date[0];
    task.time = task.time[0];
    return task;
  }

  private addTaskPropertyToSuggestions(
    task: Task, property: string, suggestions: string[]
  ): void {
    if (task[property] && suggestions.indexOf(task[property]) === -1) {
      suggestions.push(task[property]);
    }
  }

  private clearTaskChanges(): void {
    this.newTaskFormArray.clear();
  }

  showDeleteModalForTask(task: Task): void {
    this.uiKit.createConfirmationModal(`
          <span class="uk-text-lead">
              ¿Está seguro de que desea eliminar la tarea seleccionada?
          </span>
    `).then((confirm) => this.deleteTask(task), (cancel) => { });    
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(otherTask => otherTask !== task);
      this.filterTasksByString(this.searchPattern);
      this.removeTaskPropertyFromSuggestions(task, 'place', this.places);
      this.removeTaskPropertyFromSuggestions(task, 'tag', this.tags);
    });
  }

  private removeTaskPropertyFromSuggestions(
    task: Task, property: string, suggestions: string[]
  ): void {
    if (this.isTaskPropertyNotPresentInAnyTask(task[property], property)) {
      const propertyToRemoveIndex = suggestions.findIndex(
        propertyToDelete => propertyToDelete === task[property]
      );
      suggestions.splice(propertyToRemoveIndex, 1);
    }
  }

  private isTaskPropertyNotPresentInAnyTask(
    propertyValue: string, property: string
  ): boolean {
    return this.tasks
      .filter(task => task[property] === propertyValue).length == 0;
  }

  toggleTaskAsDone(task: Task): void {
    this.taskService.toggleTaskAsDone(task).subscribe(doneTask => {
      const doneTaskIndex = this.tasks.findIndex(
        taskToToggle => taskToToggle === task
      );
      this.tasks[doneTaskIndex].done = doneTask.done;
    });
  }
  
  toggleEditModeForTask(task: Task): void {
    if (!this.isTaskInEditMode(task)) this.resetEditModeForTasks();
    const taskIndex = this.findTaskIndex(task);
    this.editModeForTasks[taskIndex] = !this.editModeForTasks[taskIndex];
  }

  private findTaskIndex(task: Task) {
    return this.filteredTasks.findIndex(
      taskToFind => taskToFind === task
    );
  }

  isTaskInEditMode(task: Task): boolean {
    const taskIndex = this.findTaskIndex(task);
    return this.editModeForTasks[taskIndex];
  }

  setFormControlForTask(task: Task): void {
    this.toggleEditModeForTask(task);

    if (this.isTaskInEditMode(task)) {
      const editFormGroup = this.createNewFormGroupForTask(task);
      this.editTaskFormArray.setControl(0, editFormGroup);
    } else {
      this.editTaskFormArray.clear();
    }
  }

  editTask(oldTask: Task, editedTask: Task): void {
    if (this.isTaskDescriptionEmpty(editedTask)) { return; }
    editedTask.id = oldTask.id;
    editedTask.done = oldTask.done;
    editedTask = this.formatTaskDateAndTime(editedTask);

    this.taskService.editTask(editedTask).subscribe(editedTask => {
      this.toggleEditModeForTask(oldTask);
      this.editTaskFormArray.clear();

      const taskIndex = this.findTaskIndex(oldTask);
      this.filteredTasks[taskIndex] = editedTask;

      this.places = this.extractListOfTasksCommonProperties(
        this.tasks, 'place'
      );
      this.tags = this.extractListOfTasksCommonProperties(this.tasks, 'tag');
    });
  }

}
