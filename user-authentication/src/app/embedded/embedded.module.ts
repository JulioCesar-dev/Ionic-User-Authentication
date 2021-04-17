import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbeddedPageRoutingModule } from './embedded-routing.module';
import { EmbeddedListComponent } from './embedded-list/embedded-list.component';
import { EmbeddedEditComponent } from './embedded-edit/embedded-edit.component';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbeddedPageRoutingModule,
    ListViewModule,
    FormEditModule
  ],
  declarations: [EmbeddedListComponent, EmbeddedEditComponent]
})
export class EmbeddedPageModule {}
