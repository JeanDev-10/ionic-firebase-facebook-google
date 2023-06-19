import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config/config';
import {
  LoginResponseI,
  RegisterI,
  RegisterResponseI,
  loginI,
} from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private readonly API_URL = config.apiUrl;
  constructor(private readonly http: HttpClient) {}

  login(body: loginI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>(`${this.API_URL}login`, body);
  }
  register(body: RegisterI): Observable<RegisterResponseI> {
    return this.http.post<RegisterResponseI>(`${this.API_URL}user`, body);
  }
  setUser(id:any) {
    localStorage.setItem('user_id', id);
  }
  getUser() {
    return localStorage.getItem('user_id');
  }
  deleteUser() {
    localStorage.removeItem('user_id');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn(): boolean {
    if (this.isTokenValid()) return true;
    return false;
  }
  private isTokenValid(): boolean {
    const token = this.getToken();
    if (!token) return false;
    return true;
  }
}
