import { NgModule } from '@angular/core';
import { PrivateRoutingModule } from './private.routing.module';
import { PrivateComponent } from './private.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PrivateRoutingModule,CommonModule,
    FormsModule,
    IonicModule],
  exports: [],
  providers: [],
  declarations:[PrivateComponent]
})
export class PrivateModule { }
