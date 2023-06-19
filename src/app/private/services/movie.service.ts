import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaI } from '../pages/home/interfaces/genero.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http=inject(HttpClient);
  private readonly apiMovieOne=""
  private readonly apiCategoria="https://api.themoviedb.org/3/genre/movie/list?api_key=f4368eb87fe466c832a9678c25e57152&language=ES";
  private readonly api="https://api.themoviedb.org/3/movie/now_playing?api_key=f4368eb87fe466c832a9678c25e57152&language=ES&page=1"
  private readonly apiCartelera="https://api.themoviedb.org/3/movie/upcoming?api_key=43bb95cae941badc90476b9f10f04134&language=en-US&page=1"
  getPosterImage(){
    return this.http.get(this.api);
  }
  getPostCartelera(){
    return this.http.get(this.apiCartelera);
  }
  getCategorias():Observable<CategoriaI>{
    return this.http.get<CategoriaI>(this.apiCategoria);
  }
  getMovie(id:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f4368eb87fe466c832a9678c25e57152&language=ES`);
  }
  getMovieByNombre(nombre:string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=f4368eb87fe466c832a9678c25e57152&language=es-ES&query=${nombre}&page=1&include_adult=false`)
  }
}
