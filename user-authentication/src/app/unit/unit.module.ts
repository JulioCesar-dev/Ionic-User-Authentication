import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitPageRoutingModule } from './unit-routing.module';

import { UnitPage } from './unit-edit/unit.page';
import { UnitListPage } from './unit-list/unit-list.page';
import { ListViewModule } from '../list-view/list-view.module';

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,
    UnitPageRoutingModule,
    ListViewModule
  ],
  declarations: [UnitPage, UnitListPage]  
})
export class UnitPageModule {}
