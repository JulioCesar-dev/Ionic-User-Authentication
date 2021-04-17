import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MQTTPageRoutingModule } from './mqtt-routing.module';

import { MqttListComponent } from './mqtt-list/mqtt-list.component';
import { MqttEditComponent } from './mqtt-edit/mqtt-edit.component';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MQTTPageRoutingModule,
    ListViewModule,
    FormEditModule
  ],
  declarations: [MqttListComponent, MqttEditComponent]
})
export class MQTTPageModule {}
