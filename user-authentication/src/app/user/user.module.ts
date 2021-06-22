import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserService } from './service/user.service';
import { UserPage } from './page/user.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [
    UserService
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
