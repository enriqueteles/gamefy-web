import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MainModule } from './../../features/main/main.module';

import { MainPageComponent } from './main-page.component';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule { }
