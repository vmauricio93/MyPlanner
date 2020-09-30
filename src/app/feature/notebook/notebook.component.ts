import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { TaskService } from 'src/app/core/task.service';
import { Task } from 'src/app/shared/task';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  tasks: Task[];
  newTaskFormArray: FormArray = new FormArray([]);

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // @ts-ignore
    UIkit.use(Icons);
    
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

  saveTask(newTask: string): void {
    if (this.isNewTaskEmpty(newTask)) { return; }
    const newTaskDescription =  { description: newTask, done: false }
    this.tasks.push(newTaskDescription);
    this.clearTaskChanges();
  }

  private isNewTaskEmpty(newTask: string): boolean {
    return newTask.trim().length == 0;
  }

  clearTaskChanges(): void {
    this.newTaskFormArray.clear();
  }

  showDeleteModalForTask(task: Task): void {
    UIkit.modal.confirm(`
          <span class="uk-text-lead">
              ¿Está seguro de que desea eliminar la tarea seleccionada?
          </span>
    `).then(
      (confirm) => this.deleteTask(task),
      (cancel) => { }
    );    
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(otherTask => otherTask !== task);
  }

  toggleTaskAsDone(task: Task): void {
    const doneTaskIndex = this.tasks.findIndex(
      taskToToggle => taskToToggle === task
    );
    this.tasks[doneTaskIndex].done = !this.tasks[doneTaskIndex].done ;
  }

}
