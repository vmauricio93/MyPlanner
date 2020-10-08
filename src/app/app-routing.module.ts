import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './feature/calendar/calendar.component';
import { NotebookComponent } from './feature/notebook/notebook.component';

const routes: Routes = [
  { path: 'notebook', component: NotebookComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
