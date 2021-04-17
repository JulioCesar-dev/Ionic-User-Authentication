import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnviromentEditComponent } from './enviroment-edit/enviroment-edit.component';
import { EnviromentListComponent } from './enviroment-list/enviroment-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'list',
    component: EnviromentListComponent
  },
  {
    path: 'new',
    component: EnviromentEditComponent
  },
  {
    path: ':id/edit',
    component: EnviromentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviromentPageRoutingModule {}
