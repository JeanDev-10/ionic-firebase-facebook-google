import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { config } from 'config/config';
import { UserI } from '../interfaces/userInformation.interface';
import { Observable } from 'rxjs';
import { ComentarioObtenerResponseI, CreateComentarioResponseI, createComentarioI } from '../interfaces/comentario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserComentarioService {
  private readonly API_URL=config.apiUrl
  private http=inject(HttpClient);
  getUser(user:any):Observable<UserI>{
    return this.http.get<UserI>(`${this.API_URL}user/${user}`)
  }
  getComentariosPost(body:{post_id:string}):Observable<ComentarioObtenerResponseI>{
    return this.http.post<ComentarioObtenerResponseI>(`${this.API_URL}comentarios/obtener`,body);
  }
  createComentarioPost(body:createComentarioI):Observable<CreateComentarioResponseI>{
    return this.http.post<CreateComentarioResponseI>(`${this.API_URL}comentarios/create`,body);
  }

}
