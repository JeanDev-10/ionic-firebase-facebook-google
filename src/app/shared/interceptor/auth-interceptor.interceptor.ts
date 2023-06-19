import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private toastService:ToastService,
    private authService:AuthServiceService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token= this.authService.getToken();
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }
    console.log('interceptor');
    return next
      .handle(request)
       .pipe(catchError((error) => this.herrorHandler(error)));
  }
  private herrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        console.error('ERROR DE CLIENTE', 'top right');
      } else {

        if (error.status === 401) {
          console.log('redireccionar no autorizado');
          this.authService.deleteToken()
          this.authService.deleteUser();
          this.toastService.createToastError("No estás autenticado para estar aquí");
          this.router.navigate(['/login']);
        }
        if (error.status === 500) {
          console.error('ERROR DE SERVIDOR', 'top right');
            this.toastService.createToastError(error.error.message);
        }
      }
    } else {
      console.error('OTRO TIPO DE ERROR', 'top right');
    }
    this.toastService.createToastError(error.error.message);

    console.log(error)
    return throwError(error);
   }
}
