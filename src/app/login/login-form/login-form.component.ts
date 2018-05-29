import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'hny-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  private user = { email: '', password: '' };
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.user.email, this.user.password);
  }
}
