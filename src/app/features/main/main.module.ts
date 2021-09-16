import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { ActivitiesBoardComponent } from './components/activities-board/activities-board.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';



@NgModule({
  declarations: [
    WelcomeMessageComponent,
    ActivitiesBoardComponent,
    ActivityItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WelcomeMessageComponent,
    ActivitiesBoardComponent
  ]
})
export class MainModule { }
