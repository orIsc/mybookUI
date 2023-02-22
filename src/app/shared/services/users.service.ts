import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.interface';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private router: Router,
    private http$: HttpClient) { }

  public register(user: User): Observable<User> {
    return this.http$.post<User>(environment.apiUrl + 'user/register', user);
  }
}
