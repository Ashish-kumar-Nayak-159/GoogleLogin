import { Router } from '@angular/router';
import { GoogleLoginService } from '../google-login.service';
declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-google-signin',
  standalone: true,
  imports: [],
  templateUrl: './google-signin.component.html',
  styleUrl: './google-signin.component.scss'
})
export class GoogleSigninComponent {

  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  title = 'VideoPlayer - Login';
  constructor(
    private googleLoginService: GoogleLoginService,
    private titleService: Title
    // private route: Router
    // private formBuilder: FormBuilder,
    // private socialAuthService: SocialAuthService
  ) {
    this.titleService.setTitle(this.title);
  }
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = user != null;
    //   console.log(this.socialUser);
    // });

    google.accounts.id.initialize({
      client_id: '962727660630-516lnj2ijld1rv15p0vl5flfibp7leo4.apps.googleusercontent.com',
      callback: (res: any) =>{
        this.googleLoginService.loginWithGoogle(res);
      }
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      theme: 'filled_blue',
      size: 'medium',
      shape: 'rectangular',
      width: 350,
      text: 'signin_with'
    })
  }

}
