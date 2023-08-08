import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
const redirectUnauthorizedToLogin=()=>redirectUnauthorizedTo(['/login'])
const redirectAuthorizedToLogin=()=>redirectLoggedInTo(['/private/home'])
const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuard],
    data:{authGuardPipe:redirectAuthorizedToLogin},
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule)
  },
  {
    path: 'private',
    canActivate:[AuthGuard],
    data:{authGuardPipe:redirectUnauthorizedToLogin},
    loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule)

  },  {
    path: 'chat',
    loadChildren: () => import('./private/pages/chat/chat.module').then( m => m.ChatPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
