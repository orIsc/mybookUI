import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import {SplitButtonModule} from "primeng/splitbutton";
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [HeaderComponent, ChatComponent],
  exports: [HeaderComponent, ChatComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
		SplitButtonModule,
		RouterModule,
  ]
})
export class SharedModule { }
