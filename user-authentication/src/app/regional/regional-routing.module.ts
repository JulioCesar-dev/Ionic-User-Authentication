import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionalEditComponent } from './regional-edit/regional-edit.component';
import { RegionalListComponent } from './regional-list/regional-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {
    path: 'list',
    component: RegionalListComponent
  },
  {
    path: 'new',
    component: RegionalEditComponent
  },
  {
    path: ':id/edit',
    component: RegionalEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionalPageRoutingModule {}
