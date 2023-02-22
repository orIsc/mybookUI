import { UsersState } from './state/store/users.state';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './environments/environment';
import { AuthState } from './state/store/auth.state';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import {ToastModule} from "primeng/toast";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MessageService } from 'primeng/api';
import { HttpConfigInterceptor } from './interceptors/http-config-interceptor.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    SharedModule,
    AuthModule,
    ToastModule,
		NgxsModule.forRoot([AuthState, UsersState], {developmentMode: !environment.production}),
		NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    MessageService,
		{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
