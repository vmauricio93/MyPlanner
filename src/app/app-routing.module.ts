import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './feature/calendar/calendar.component';
import { HomeComponent } from './feature/home/home.component';
import { NotebookComponent } from './feature/notebook/notebook.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
