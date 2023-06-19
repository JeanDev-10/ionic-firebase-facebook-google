import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/userInformation.interface';
import { NewComment } from '../interfaces/comentario.interface';
@Injectable({
  providedIn: 'root'
})
export class DataServiceUser {
  private comment$:Subject<boolean>=new Subject<boolean>();
  private user$:BehaviorSubject<User>=new BehaviorSubject<User>({email:'',id:0,user:''});
  setUserInformation(user:User){
    this.user$.next(user);
  }
  getUserInformation(){
    return this.user$.asObservable();
  }
  setComment(comment:boolean){
    this.comment$.next(comment);
  }
  getComment(){
    return this.comment$.asObservable();
  }
  clearSubject(){
    this.user$=new BehaviorSubject<User>({email:'',id:0,user:''});
  }
}
