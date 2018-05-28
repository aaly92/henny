import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginBackgroundComponent } from './login-background/login-background.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginFormComponent, LoginBackgroundComponent, LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
