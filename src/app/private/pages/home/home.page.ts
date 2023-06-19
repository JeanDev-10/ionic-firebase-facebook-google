import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable, Observer, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CategoriaI } from './interfaces/genero.interface';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';
import { DataServiceUser } from '../../services/dataServiceUser.service';
import { UserComentarioService } from '../../services/user-comentario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  posts:any;
  postCartelera!:any;
  categorias$:Observable<CategoriaI>=this.movieService.getCategorias();
  constructor(private readonly movieService:MovieService,private readonly authService:AuthServiceService,private readonly dataServiceUser:DataServiceUser,private readonly userComentService:UserComentarioService) {
    this.userComentService.getUser(this.authService.getUser()).subscribe((data)=>{
      this.dataServiceUser.setUserInformation(data.user[0]);
      console.log(data)
    })
  }
  ngOnInit(): void {

    this.movieService.getPosterImage().subscribe((data:any)=>{
      this.posts=data.results;
    });
    this.movieService.getPostCartelera().subscribe((data:any)=>{
      this.postCartelera=data.results;
    })
  }


}
