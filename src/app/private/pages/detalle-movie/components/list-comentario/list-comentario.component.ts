import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { ComentarioObtenerResponseI, NewComment, Post } from 'src/app/private/interfaces/comentario.interface';
import { DataServiceUser } from 'src/app/private/services/dataServiceUser.service';
import { UserComentarioService } from 'src/app/private/services/user-comentario.service';

@Component({
  selector: 'app-list-comentario',
  templateUrl: './list-comentario.component.html',
  styleUrls: ['./list-comentario.component.scss'],
})
export class ListComentarioComponent  implements OnInit,OnDestroy {
  @Input() post_id!:string;
  comentarios$!:Observable<Post[]>;
  private destroy$:Subject<void>=new Subject<void>()
  constructor(private readonly userComentService:UserComentarioService,private readonly dataServiceUser:DataServiceUser) {

    dataServiceUser.getComment().pipe(takeUntil(this.destroy$)).subscribe((data:boolean)=>{
        if(data==true){
          this.comentarios$=this.userComentService.getComentariosPost({post_id:this.post_id}).pipe(map(res=>res.post))
        }
      })
   }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete()
  }

  ngOnInit() {
    this.comentarios$=this.userComentService.getComentariosPost({post_id:this.post_id}).pipe(map(res=>res.post))
  }

}
