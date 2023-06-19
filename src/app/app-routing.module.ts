import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './shared/guards/permission.guard';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[PermissionGuard],
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule)
  },
  {
    path: 'private',
    canActivate:[AuthGuard],
    loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule)

  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
