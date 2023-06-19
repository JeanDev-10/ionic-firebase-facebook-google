import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: 'detalle-movie/:id',
        loadChildren: () =>
          import('./pages/detalle-movie/detalle-movie.module').then(
            (m) => m.DetalleMoviePageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./pages/search/search.module').then(
            (m) => m.SearchPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
