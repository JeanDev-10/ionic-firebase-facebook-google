import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable, Observer, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CategoriaI } from './interfaces/genero.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  posts:any;
  postCartelera!:any;
  categorias$:Observable<CategoriaI>=this.movieService.getCategorias();
  searchTerm$:Subject<string>=new Subject();
  moviesFound:any=null;
  total_results!:any
  constructor(private readonly movieService:MovieService) {
    this.searchTerm$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((term: string) => {
        console.log(term);
        return this.movieService.getMovieByNombre(term)
      }),
    ).subscribe((data:any)=>{
      console.log(data)
      this.moviesFound=data.results;
      this.total_results=data.total_results;
    },()=>alert('error no existe'));
  }
  ngOnInit(): void {
    this.movieService.getPosterImage().subscribe((data:any)=>{
      this.posts=data.results;
    });
    this.movieService.getPostCartelera().subscribe((data:any)=>{
      this.postCartelera=data.results;
    })
  }
  onChangeInput(event:any){
    if(event.target.value===''){
      console.log("vacío");
      this.total_results=null;
      this.moviesFound=[];
      console.log(this.total_results,this.moviesFound);
    }else{
      this.searchTerm$.next(event.target.value);
    }

  }

}
