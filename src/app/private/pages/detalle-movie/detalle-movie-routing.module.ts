import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMoviePage } from './detalle-movie.page';

const routes: Routes = [
  {
    path: '',
    title:'Pelicula',
    component: DetalleMoviePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMoviePageRoutingModule {}
