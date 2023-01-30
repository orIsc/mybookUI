import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import {SplitButtonModule} from "primeng/splitbutton";
import {MenubarModule} from 'primeng/menubar';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
		SplitButtonModule,
		RouterModule,
  ]
})
export class SharedModule { }
