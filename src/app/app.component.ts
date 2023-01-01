import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from './state/store/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mybookUI';
  @Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<any>;

  constructor() {
  }
}
