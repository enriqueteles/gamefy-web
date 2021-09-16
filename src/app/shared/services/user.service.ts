import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APP_USER = "APP_USER";

  constructor(
    private http: HttpClient,
    private ls: LocalStorageService
  ) { }

  public updateProfileImage(file: File) {
    // save database
    const endpoint = `${environment.API}/user/profile-img`;
    const formData: FormData = new FormData();
    formData.append('file', file);

    console.log("here bb")

    this.http.post(endpoint, formData)
      .subscribe({
        next: (res: any) => {
          // update local storage url
          this.updateUser("image_medium_url", res.image_medium_url);
          return true;
        },
        error: err => {
          console.log(err);
        }
      })
  }

  public getUser() {
    return this.ls.getItem(this.APP_USER);
  }

  public setUser(user: User) {
    this.ls.setItem(this.APP_USER, user);
  }

  public updateUser(key: string, value: string) {
    const user = this.getUser();
    user[key] = value;

    console.log(user);

    this.setUser(user);
  }

}

