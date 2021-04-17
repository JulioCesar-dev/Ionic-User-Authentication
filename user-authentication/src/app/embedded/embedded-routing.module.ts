import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmbeddedEditComponent } from './embedded-edit/embedded-edit.component';
import { EmbeddedListComponent } from './embedded-list/embedded-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {
    path: 'list',
    component: EmbeddedListComponent
  },
  {
    path: 'new',
    component: EmbeddedEditComponent
  },
  {
    path: ':id/edit',
    component: EmbeddedEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbeddedPageRoutingModule {}
