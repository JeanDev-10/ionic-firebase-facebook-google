import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceUser } from '../../services/dataServiceUser.service';
import { User } from '../../interfaces/userInformation.interface';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent implements OnDestroy {
  user!:User
  private destroy$:Subject<void>=new Subject<void>()
  constructor(private readonly dataServiceUser:DataServiceUser,private readonly router:Router) {
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

}
