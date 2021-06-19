import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionalListComponent } from './regional-list/regional-list.component';
import { RegionalEditComponent } from './regional-edit/regional-edit.component';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';
import { RegionalService } from './service/regional.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionalPageRoutingModule } from './regional-routing.module';


@NgModule({
  providers: [
    RegionalService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionalPageRoutingModule,
    ListViewModule,
    FormEditModule,
    HttpClientModule
  ],
  declarations: [RegionalListComponent, RegionalEditComponent]
})
export class RegionalPageModule {}
