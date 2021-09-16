import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faBell, faCog, faPen, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@shared/services/auth.service';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {

  bellIcon = faBell; 
  settingsIcon = faCog;
  logoutIcon = faSignOutAlt;
  questionIcon = faQuestion;
  penIcon = faPen;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private cdRef: ChangeDetectorRef
  ) { }

  userProfile = 'assets/temp/profile.jpg';
  
  ngOnInit(): void {
    let user = this.userService.getUser();
    this.userProfile = user.image_medium_url;
  }
  
  ngOnChanges() {
    let user = this.userService.getUser();
    this.userProfile = user.image_medium_url;
    console.log("updated");
  }

  onLogout() {
    this.authService.logout();
  }

  handleImageInput(event: EventTarget) {
    let file = (<HTMLInputElement>event).files[0];
    console.log(file);
    this.userService.updateProfileImage(file);
    this.cdRef.detectChanges();
  }

}
