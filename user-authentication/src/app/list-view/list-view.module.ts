import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ListViewComponent } from './list-view.component';


@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ListViewComponent],
  exports: [ListViewComponent]
})
export class ListViewModule {}
