import { Component, Input } from '@angular/core';
import { GoogleLoginService } from '../google-login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() userData: any;
  constructor(public googleLoginService: GoogleLoginService){}
}
