import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

 // private route = inject(Router);
 constructor(
  // private socialAuthService: SocialAuthService
  private route : Router
  ) { }

loginUser(){
  // this.socialAuthService.authState.subscribe((user) => {
    // return user;
  // });
}

loginWithGoogle1(): void {
  // this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

private decodeToken(token: string){
  return JSON.parse(atob(token.split('.')[1]));
}

loginWithGoogle(resp: any){
  if(resp){
    const payload = this.decodeToken(resp.credential);
    console.log('payload =',payload);

    sessionStorage.setItem('LoggedinUser',JSON.stringify(payload));
    this.route.navigate(['home'])
  }
}

logOut(): void {
  sessionStorage.clear();
  // this.socialAuthService.signOut();
  google.accounts.id.disableAutoSelect();
  this.route.navigate(['/']);
}

}
