import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  
  newTaskFormArray: FormArray = new FormArray([]);
  @ViewChildren('descriptionInput') descriptionInputRef: QueryList<any>;
  private descriptionInputSubscription = new Subscription();

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
  }

  ngOnDestroy(): void {
    this.descriptionInputSubscription.unsubscribe();
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
    if (this.isNewTaskEmpty(newTask)) { return; }
    newTask = this.formatNewTask(newTask);
    this.taskService.postTask(newTask).subscribe(task => {
      this.tasks.unshift(task);
      this.filterTasksByString(this.searchPattern);
      this.addTaskPropertyToSuggestions(task, 'place', this.places);
      this.addTaskPropertyToSuggestions(task, 'tag', this.tags);
    });
    this.clearTaskChanges();
  }

  private isNewTaskEmpty(newTask: Task): boolean {
    return newTask.description.trim().length == 0;
  }

  private formatNewTask(task: Task): Task {
    task.done = false;
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
      this.tasks[doneTaskIndex].done = doneTask.done ;
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

  editTask(task: Task): void {
    this.toggleEditModeForTask(task);

    if (this.isTaskInEditMode(task)) {
      const editFormGroup = this.createNewFormGroupForTask(task);
      this.editTaskFormArray.setControl(0, editFormGroup);
    } else {
      this.editTaskFormArray.clear();
    }
  }

}
