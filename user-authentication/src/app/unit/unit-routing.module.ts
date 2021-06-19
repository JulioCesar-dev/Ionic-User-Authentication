import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { UnitListComponent } from './unit-list/unit-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {
    path: 'list',
    component: UnitListComponent
  },
  {
    path: 'new',
    component: UnitEditComponent
  },
  {
    path: ':id/edit',
    component: UnitEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitPageRoutingModule {}
