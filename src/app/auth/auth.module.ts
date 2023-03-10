import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { RegisterComponent } from './components/register/register.component';

export const ROUTES: Routes = [
	{
		path: 'auth',
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'login'},
			{path: 'login', component: LoginComponent},
		]
	},
	{
		path: 'auth',
		children: [
			{path: '', pathMatch: 'full', redirectTo: 'register'},
			{path: 'register', component: RegisterComponent},
		]
	}
]


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    	CommonModule,
		InputTextModule,
		RouterModule.forChild(ROUTES),
		ReactiveFormsModule,
		CardModule,
		ButtonModule,
		NgxsStoragePluginModule.forRoot({
			key: ['auth.token', 'auth.username', 'auth.role'],
		}),
		RippleModule,
  ]
})
export class AuthModule { }
