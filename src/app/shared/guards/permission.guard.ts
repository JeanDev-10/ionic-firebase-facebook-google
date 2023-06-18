import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private readonly authService:AuthServiceService,
    private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("login register guard")

      if(this.isLogin()){
        return true;
      }
      return false;
    }
    isLogin():boolean{
      if(!this.authService.isLoggedIn()) {
        return true;
      }
      console.log("no dejar salir al login")
      this.router.navigate(['/private/home']);
      return false;
  }

}
