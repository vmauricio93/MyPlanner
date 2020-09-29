import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotebookComponent } from './feature/notebook/notebook.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NotebookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
