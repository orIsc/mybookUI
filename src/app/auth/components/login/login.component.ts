import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login } from 'src/app/state/actions/auth.actions';
import { AuthState } from 'src/app/state/store/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  formGroup!: FormGroup;
	@Output() submitted = new EventEmitter<FormGroup>();
	@Select(AuthState.isAuthenticated) isAuthenticated$!: Observable<any>;

	constructor(private fb: FormBuilder,
							private store: Store,
							private router: Router) {
	}

	ngOnInit(): void {
		this.isAuthenticated$.subscribe((isAuthenticated) => {

			if (isAuthenticated) {
				this.router.navigate(['/home']);
			}
		})
		this.formGroup = this.fb.group({
			userName: ['', Validators.required],
			password: ['', Validators.required]
		})
	}

	submit() {
		if (this.formGroup.valid) {
			this.store.dispatch(new Login(this.formGroup.value));
		}
	}
}
