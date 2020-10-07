import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FlatpickrService } from 'src/app/core/flatpickr.service';
import { TaskService } from 'src/app/core/task.service';
import { UiKitService } from 'src/app/core/ui-kit.service';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  tasks: Task[];
  newTaskFormArray: FormArray = new FormArray([]);

  places: string[];

  constructor(
    private taskService: TaskService,
    private uiKit: UiKitService,
    private flatpickr: FlatpickrService
  ) { }

  ngOnInit(): void {    
    this.uiKit.useUIkitIcons();
    this.flatpickr.localizeSpanish();
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.places = [...new Set(
        tasks.filter(task => task.place).map(task => task.place)
      )];
    });
  }

  promptForNewTask(): void {
    if (this.newTaskInputPromptExists()) { return; }
    const newFormGroup = new FormGroup({
      description: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      place: new FormControl(''),
      tag: new FormControl('')
    });
    this.newTaskFormArray.push(newFormGroup);
  } 

  private newTaskInputPromptExists(): boolean {
    return this.newTaskFormArray.length > 0;
  }

  saveTask(newTask: Task): void {
    if (this.isNewTaskEmpty(newTask)) { return; }
    newTask = this.formatNewTask(newTask);
    this.taskService.postTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.addPlaceToSuggestions(task);
    });
    this.clearTaskChanges();
  }

  private addPlaceToSuggestions(task: Task): void {
    if (task.place && this.places.indexOf(task.place) === -1) {
      this.places.push(task.place);
    }
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

  clearTaskChanges(): void {
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
      this.RemovePlaceFromSuggestions(task);
    });
  }

  private RemovePlaceFromSuggestions(task: Task): void {
    if (this.isPlaceNotPresentInAnyTask(task.place)) {
      const placeToRemoveIndex = this.places.findIndex(
        placeToDelete => placeToDelete === task.place
      );
      this.places.splice(placeToRemoveIndex, 1);
    }
  }

  private isPlaceNotPresentInAnyTask(place: string): boolean {
    return this.tasks.filter(task => task.place === place).length == 0;
  }

  toggleTaskAsDone(task: Task): void {
    this.taskService.toggleTaskAsDone(task).subscribe(doneTask => {
      const doneTaskIndex = this.tasks.findIndex(
        taskToToggle => taskToToggle === task
      );
      this.tasks[doneTaskIndex].done = doneTask.done ;
    });
  }

}
