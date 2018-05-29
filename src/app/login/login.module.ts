import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginBackgroundComponent } from './login-background/login-background.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [LoginFormComponent, LoginBackgroundComponent, LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService, UserService],
})
export class LoginModule {}
