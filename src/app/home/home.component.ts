import { Component } from '@angular/core';
import { GoogleLoginService } from '../google-login.service';
import { Title } from '@angular/platform-browser';
import { VideosComponent } from "../videos/videos.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [VideosComponent, NavbarComponent]
})
export class HomeComponent {
  userData: any;
  title = 'VideoPlayer - Home';
  constructor(
    public googleLoginService: GoogleLoginService,
    private titleService: Title
  ){
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('LoggedinUser')!);
    console.log('userData =', this.userData)
  }

}
