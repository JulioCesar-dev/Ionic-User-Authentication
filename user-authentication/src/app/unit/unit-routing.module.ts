import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitPage } from './unit-edit/unit.page';
import { UnitListPage } from './unit-list/unit-list.page';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'list',
    component: UnitListPage,
  },
  {
    path: 'new',
    component: UnitPage
  },
  {
    path: ':id/edit',
    component: UnitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitPageRoutingModule {}
