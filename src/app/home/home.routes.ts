import {Routes} from "@angular/router";
import {AuthGuard} from "../auth/guards/auth.guard";
import {Role} from "../auth/models/role.enum";
import { HomeComponent } from "./components/home/home.component";

export const homeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard],
		data: {roles: [Role.System, Role.User]}
	}
];
