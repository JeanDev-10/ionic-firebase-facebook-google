import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {createComentarioI } from 'src/app/private/interfaces/comentario.interface';
import { User } from 'src/app/private/interfaces/userInformation.interface';
import { DataServiceUser } from 'src/app/private/services/dataServiceUser.service';
import { UserComentarioService } from 'src/app/private/services/user-comentario.service';
import { ToastService } from 'src/app/shared/services/toast.service';
@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent  implements OnInit {
  @Input() post_id!:number;
  comentarioForm:FormGroup;
  user!:User
  constructor(private readonly toastService:ToastService,private readonly userComentarioService:UserComentarioService, private readonly fb:FormBuilder,private readonly dataServiceUser:DataServiceUser) {
    this.comentarioForm=this.fb.group({
      comentario:['',[Validators.required]],
    })
    this.dataServiceUser.getUserInformation().subscribe((user)=>{
      this.user=user;
    })
   }

  ngOnInit() {}
  emitOutput(dato:boolean) {
    this.dataServiceUser.setComment(dato)
  }
  sendComment(form:any,){

    if(this.comentarioForm.valid){
      const body:createComentarioI={
        comentario:form.comentario,
        post_id:this.post_id,
        user_id:this.user.id
      }
      this.userComentarioService.createComentarioPost(body).subscribe((data)=>{
        this.toastService.createToastSucess("Comentario creado con exito")
        this.emitOutput(true);
        this.comentarioForm.setValue({'comentario':null})
      })
    }else{
      this.toastService.createToastError('Campo invalido de comentario')
    }
  }
}
