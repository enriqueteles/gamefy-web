import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from '../../features/home/home.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
