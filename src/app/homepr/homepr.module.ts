import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeprPageRoutingModule } from './homepr-routing.module';

import { HomeprPage } from './homepr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeprPageRoutingModule
  ],
  declarations: [HomeprPage]
})
export class HomeprPageModule {}
