import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockPageRoutingModule } from './block-routing.module';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockEditComponent } from './block-edit/block-edit.component';
import { ListViewModule } from '../list-view/list-view.module';
import { FormEditModule } from '../form-edit/form-edit.module';
import { BlockService } from './service/block.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  providers: [
    BlockService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlockPageRoutingModule,
    ListViewModule,
    FormEditModule,
    HttpClientModule
  ],
  declarations: [BlockListComponent, BlockEditComponent]
})
export class BlockPageModule {}
