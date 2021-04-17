import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqttEditComponent } from './mqtt-edit/mqtt-edit.component';
import { MqttListComponent } from './mqtt-list/mqtt-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'list',
    component: MqttListComponent
  },
  {
    path: 'new',
    component: MqttEditComponent
  },
  {
    path: ':id/edit',
    component: MqttEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MQTTPageRoutingModule {}
