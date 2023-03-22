import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component'; 
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { PostFeedComponent } from './components/post-feed/post-feed.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';


@NgModule({
  declarations: [
    HomeComponent,
    PostFeedComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    MenuModule,
    AvatarModule,
  ]
})
export class HomeModule { }
