import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';
import { HttpClientModule } from '@angular/common/http';
import { UnitService } from './service/unit.service';


@NgModule({
  providers: [
    UnitService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule,
    ListViewModule,
    FormEditModule,
    HttpClientModule
  ],
  declarations: [UnitListComponent, UnitEditComponent]
})
export class UnitPageModule {}
