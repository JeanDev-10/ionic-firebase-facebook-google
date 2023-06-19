import { NgModule } from '@angular/core';
import { PublicRoutingModule } from './public.routing.module';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [PublicRoutingModule,IonicModule,FormsModule,CommonModule,HttpClientModule],
  exports: [],
  providers: [],
})
export class PublicModule { }
