import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { AuthServiceService } from '../../services/auth-service.service';
import { loginI } from '../../interfaces/auth.interfaces';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isSeePassword:boolean=false;
  formLogin!:FormGroup
  constructor(private fb:FormBuilder,private readonly toastService:ToastService,
    private readonly authService:AuthServiceService,private readonly router:Router) {
    this.formLogin= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
    })
   }


  ngOnInit() {
  }
  login(form:any){
    if(this.formLogin.valid){
      const body:loginI={
        email:form.email,
        password:form.password
      }
      this.authService.login(form).subscribe((data)=>{
        this.authService.setToken(data.token)
        this.authService.setUser(data.dataUser.id)
        this.router.navigate(['/private/home']);
        this.toastService.createToastSucess('Inicio de sesión exitoso');
      })
    }else{
      this.toastService.createToastError('Formulario invalido, llene todos los datos');
    }
  }
  seePassword(){
    this.isSeePassword=!this.isSeePassword;
  }

}
