import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockEditComponent } from './block-edit/block-edit.component';
import { BlockListComponent } from './block-list/block-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {
    path: 'list',
    component: BlockListComponent
  },
  {
    path: 'new',
    component: BlockEditComponent
  },
  {
    path: ':id/edit',
    component: BlockEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockPageRoutingModule {}
