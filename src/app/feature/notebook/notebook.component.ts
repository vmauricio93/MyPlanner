import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Task } from 'src/app/shared/task';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit {
  tasks: Task[] = [];
  newTaskFormArray: FormArray = new FormArray([]);

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    UIkit.use(Icons);
  }

  promptForNewTask(): void {
    if (this.newTaskInputPromptExists()) { return; }
    this.newTaskFormArray.push(new FormControl(''));
  } 

  private newTaskInputPromptExists(): boolean {
    return this.newTaskFormArray.length > 0;
  }

  saveTask(formControlValue: string): void {
    const newTaskDescription =  { description: formControlValue }
    this.tasks.push(newTaskDescription);
    this.clearTaskChanges();
  }

  clearTaskChanges(): void {
    this.newTaskFormArray.clear();
  }

}
