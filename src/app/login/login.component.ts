// import { GoogleLoginService } from './../google-login.service';
import { Component } from '@angular/core';
import { GoogleSigninComponent } from "../google-signin/google-signin.component";
// import { environment } from '../../environments/environment';
// import {FirestoreModule} from '@angular/fire/firestore';
// import {
  //  SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig,
//   SocialAuthService,
//    SocialUser } from '@abacritt/angularx-social-login';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [
        GoogleSigninComponent,
        // FirestoreModule,
        // AngularFireModule.initializeApp(environment.firebaseConfig),
    ]
})
export class LoginComponent {
  // loginForm!: FormGroup;
  // socialUser!: SocialUser;
  // isLoggedin?: boolean;
  constructor(
    // private formBuilder: FormBuilder,
    // public GoogleLoginService : GoogleLoginService
  ) {}
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // });
    // const user : any = this.GoogleLoginService.loginUser();
    // this.socialUser = user;
    // this.isLoggedin = user != null;
    // console.log(this.socialUser);
  }

  // loginWithGoogle(){}
}
