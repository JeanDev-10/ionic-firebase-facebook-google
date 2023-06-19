import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMoviePageRoutingModule } from './detalle-movie-routing.module';

import { DetalleMoviePage } from './detalle-movie.page';
import { ListComentarioComponent } from './components/list-comentario/list-comentario.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import {SharedModule} from '../../../shared/shared.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMoviePageRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [DetalleMoviePage,ListComentarioComponent,CreateCommentComponent]
})
export class DetalleMoviePageModule {}
