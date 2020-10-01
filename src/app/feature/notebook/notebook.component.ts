import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
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

  constructor(
    private taskService: TaskService,
    private uiKit: UiKitService
  ) { }

  ngOnInit(): void {    
    this.uiKit.useUIkitIcons();
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  promptForNewTask(): void {
    if (this.newTaskInputPromptExists()) { return; }
    const newFormControl = new FormControl('');
    this.newTaskFormArray.push(newFormControl);
  } 

  private newTaskInputPromptExists(): boolean {
    return this.newTaskFormArray.length > 0;
  }

  saveTask(newTaskDescription: string): void {
    if (this.isNewTaskEmpty(newTaskDescription)) { return; }
    const newTask =  { description: newTaskDescription, done: false }
    this.taskService.postTask(newTask).subscribe(task => {
      this.tasks.push(task)
    });
    this.clearTaskChanges();
  }

  private isNewTaskEmpty(newTask: string): boolean {
    return newTask.trim().length == 0;
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
    });
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
