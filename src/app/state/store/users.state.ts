import { Injectable, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { User } from "src/app/auth/models/user.interface";
import { UsersService } from "src/app/shared/services/users.service";
import { Register } from "../actions/users.actions";

export interface UsersStateModel {
    users: User[]
}

@State<UsersStateModel>({
    name: 'users',
    defaults: {
        users: []
    }
})
@Injectable()
export class UsersState {

    @Selector()
    static users(state: UsersStateModel): User[] {
        return state.users;
    }

    constructor(private usersService: UsersService,
        private router: Router,
							private zone: NgZone) {}
    
    @Action(Register)
    register(ctx: StateContext<UsersStateModel>, user: Register) {
        const state = ctx.getState();
        return this.usersService.register(user.payload).pipe(
            tap((user: User) => {
                ctx.patchState({
					users: [...state.users, user]
				});
            })
        )
    }
}