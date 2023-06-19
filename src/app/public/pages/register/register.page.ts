import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { RegisterI } from '../../interfaces/auth.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  isSeePassword:boolean=false;
  formRegister!:FormGroup
  constructor(private fb:FormBuilder,private readonly toastService:ToastService,private readonly authService:AuthServiceService,private readonly route:Router) {
    this.formRegister= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      username:['',[Validators.required]],

    })
   }
   register(form:any){
    if(this.formRegister.valid){
      console.log(form)
      const body:RegisterI={
        email:form.email,
        password:form.password,
        user:form.username
      }
      this.authService.register(body).subscribe((data)=>{
        this.authService.setToken(data.token)
        this.authService.setUser(data.users.id)
        this.toastService.createToastSucess('Registro exitoso');
        this.route.navigate(['/private/home'])
        this.toastService.createToastSucess('Inicio de sesión exitoso');
      })
    }else{
      this.toastService.createToastError('Formulario invalido, llene todos los datos');

    }
   }
  ngOnInit() {
  }
  seePassword(){
    this.isSeePassword=!this.isSeePassword;
  }
}
