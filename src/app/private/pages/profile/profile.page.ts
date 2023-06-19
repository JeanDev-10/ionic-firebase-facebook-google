import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceUser } from '../../services/dataServiceUser.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { User } from '../../interfaces/userInformation.interface';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnDestroy {
  user!:User
  private destroy$:Subject<void>=new Subject<void>()
  constructor(private readonly dataServiceUser:DataServiceUser,private readonly router:Router,private readonly authService:AuthServiceService,private readonly toastService:ToastService) {
    dataServiceUser.getUserInformation().pipe(takeUntil(this.destroy$)).subscribe(data=>{
      if(data.id===0){
        this.router.navigate(['/private/home'])
      }else{
        this.user=data
      }
    })
   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }
  logout(){
    this.authService.deleteToken()
    this.authService.deleteUser()
    this.toastService.createToastSucess("Cierre de sesión exitoso")
    this.router.navigate(['/login'])
    this.dataServiceUser.clearSubject()
  }


}
