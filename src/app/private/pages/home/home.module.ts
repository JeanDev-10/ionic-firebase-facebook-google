import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {SharedModule} from '../../../shared/shared.module'
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule,SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePage, ],
})
export class HomePageModule {}
