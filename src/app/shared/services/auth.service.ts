import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/models/user.model';

import { environment } from '../../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: String = '';
  isAuthenticated: Boolean = false;
  user: User;
  // user$ = (new BehaviorSubject<User>(this.user));
  signingIn: Boolean;

  JWT_TOKEN = "JWT_TOKEN";

  constructor(
    private ls: LocalStorageService,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }


  public login(email: string, password: string) {
    let endpoint = `${environment.API}/login`;

    return this.http.post(endpoint, {
      email,
      password
    })
      .pipe(
        map((res : any) => {
          this.setUserAndToken(res.token, {
            id: res.id,
            name: res.name,
            email: res.email,
            username: res.username,
            is_super: res.is_super,
            image_medium_url: res.image_medium_url
          }, true);
        })
      );


  }

  // public signIn(username: string, password: string) {
  //   return of({token: DEMO_TOKEN, user: DEMO_USER})
  //     .pipe(
  //       delay(1000),
  //       map((res: any) => {
  //         this.setUserAndToken(res.token, res.user, !!res);
  //         this.signingIn = false;
  //         return res;
  //       }),
  //       catchError((error) => {
  //         return throwError(error);
  //       })
  //     );
  // }


  // public checkTokenIsValid() {
  //   return of(DEMO_USER)
  //     .pipe(
  //       map((profile: User) => {
  //         this.setUserAndToken(this.getJwtToken(), profile, true);
  //         this.signingIn = false;
  //         return profile;
  //       }),
  //       catchError((error) => {
  //         return of(error);
  //       })
  //     );
  // }

  public logout() {
    this.setUserAndToken(null, null, false);
    this.router.navigateByUrl("/");
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return this.ls.getItem(this.JWT_TOKEN);
  }

  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    // this.user$.next(user);
    this.ls.setItem(this.JWT_TOKEN, token);
    this.userService.setUser(user);
  }

}
