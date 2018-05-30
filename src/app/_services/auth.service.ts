import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AppUser } from '../_models/app.user';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.user$ = afAuth.authState;
  }

  login(username: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

  logout() {
    this.afAuth.auth.signOut().then(result => {
      this.router.navigate(['../login'], { relativeTo: this.route });
    });
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      if (user) {
        return this.userService.get(user.uid);
      }
      return Observable.of(null);
    });
  }
}
