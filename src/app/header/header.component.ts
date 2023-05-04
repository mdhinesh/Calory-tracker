import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: SocialUser = new SocialUser;
  loggedIn: boolean = localStorage.getItem('loggedIn') == 'true' ? true : false;
  showGoogleLogin = true;
  currentUser: SocialUser = new SocialUser;

  showMenu: boolean = false;

  constructor(private authService: SocialAuthService, private sidebarService: NbSidebarService) { 
  }

  ngOnInit() {
    // const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!) as SocialUser;
    if (this.currentUser != null) {
      this.showGoogleLogin = false;
      this.user = this.currentUser;
      this.loggedIn = true;
    }  
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log('User data:', this.user);
      console.log('Logged in:', this.loggedIn);
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('loggedIn', JSON.stringify(this.loggedIn));
    });
  }


  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    this.loggedIn = false;
    this.showGoogleLogin = true;
    this.currentUser = new SocialUser;
  }

}
