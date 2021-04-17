import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockPageRoutingModule } from './block-routing.module';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockEditComponent } from './block-edit/block-edit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockPageRoutingModule,
    ListViewModule,
    FormEditModule
  ],
  declarations: [BlockListComponent, BlockEditComponent]
})
export class BlockPageModule {}
