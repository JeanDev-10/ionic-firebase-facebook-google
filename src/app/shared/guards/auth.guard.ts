import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthServiceService) {}

  canActivate(): boolean {
    if (this.isLogin()) {
      return true;
    } else {
      return false;
    }
  }
  isLogin():boolean{
    if(this.authService.isLoggedIn()) {
      return true
    }
    console.log("redireccionar")
    this.router.navigate(['/login']);
    return false;
  }
}
