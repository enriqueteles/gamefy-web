import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileSidebarComponent } from './components/profile-sidebar/profile-sidebar.component';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ProfileSidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    ProfileSidebarComponent
  ]
})
export class SharedModule { }
