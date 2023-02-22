import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,
    private http$: HttpClient) {
  }

  public login({userName, password}: { userName: string, password: string }) {
    return this.http$.post<User>(`${environment.apiUrl}user/login`, {userName, password});
  }

  public logout(token: string | null) {
  //TODO: maybe we want to logout user in the Backend so we need the token
    return of(true)
  }

}
