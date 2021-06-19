import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviromentPageRoutingModule } from './enviroment-routing.module';
import { EnviromentListComponent } from './enviroment-list/enviroment-list.component';
import { EnviromentEditComponent } from './enviroment-edit/enviroment-edit.component';
import { FormEditModule } from '../form-edit/form-edit.module';
import { ListViewModule } from '../list-view/list-view.module';
import { HttpClientModule } from '@angular/common/http';
import { EnviromentService } from './service/enviroment.service';


@NgModule({
  providers: [
    EnviromentService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviromentPageRoutingModule,
    ListViewModule,
    FormEditModule,
    HttpClientModule
  ],
  declarations: [EnviromentListComponent, EnviromentEditComponent]
})
export class EnviromentPageModule {}
