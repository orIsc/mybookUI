import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap, catchError } from "rxjs";
import { Role } from "src/app/auth/models/role.enum";
import { AuthService } from "src/app/auth/services/auth.service";
import { AuthStateModel, Login, Logout } from "../actions/auth.actions";

@State<AuthStateModel>({
	name: 'auth',
	defaults: {
		token: null,
		email: null,
		role: null,
	}
})
@Injectable()
export class AuthState {
	@Selector()
	static token(state: AuthStateModel): string | null {
		return state.token;
	}

	@Selector()
	static email(state: AuthStateModel): string | null {
		return state.email;
	}

	@Selector()
	static isAuthenticated(state: AuthStateModel): boolean {
		return !!state.token;
	}

	@Selector()
	static role(state: AuthStateModel): Role | null {
		return state.role;
	}

	constructor(private authService: AuthService,
							private router: Router,
							private zone: NgZone) {
	}

	@Action(Login)
	login(ctx: StateContext<AuthStateModel>, action: Login) {
		return this.authService.login(action.payload).pipe(
			tap((result) => {
				ctx.patchState({
					token: result.token,
					email: result.email,
					role: result.role,
				});
				this.zone.run(() => this.router.navigate(['/home']));
			}),
			catchError((err) => {
				console.log(err);
				return err;
			})
		);
	}

	@Action(Logout)
	logout(ctx: StateContext<AuthStateModel>) {
		const state = ctx.getState();
		return this.authService.logout(state.token).pipe(
			tap(() => {
				ctx.setState({
					token: null,
					email: null,
					role: null,
				});
				this.zone.run(() => this.router.navigate(['/auth/login']));
			})
		);
	}
}
