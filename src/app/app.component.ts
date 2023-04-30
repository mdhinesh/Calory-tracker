import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { NbIconLibraries } from '@nebular/theme';

import { AppFoodListComponent } from './app-food-list/app-food-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'google-Oauth-3';
  user: SocialUser = new SocialUser;
  loggedIn: boolean = localStorage.getItem('loggedIn') == 'true' ? true : false;

  currentUser: SocialUser = new SocialUser;
  showGoogleLogin = true;

  // sidenavemenu: boolean = true;
  showMenu: boolean = false;
  showAddFood: boolean = true;
  showFoodList: boolean = false;

  compacted: boolean = true;

  // appFoofListComponent
  name: string = "";
  calories: number = 0; 
  image: string = "";
  newList: any[] = [];
  inputList: any = {};

  constructor(private authService: SocialAuthService, private sidebarService: NbSidebarService, private iconLibraries: NbIconLibraries) { 
    this.iconLibraries.registerFontPack('fa', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('fa');
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

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loggedIn');
    this.loggedIn = false;
    this.showGoogleLogin = true;
    this.currentUser = new SocialUser;
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
    this.compacted = !this.compacted;
  }

  items: NbMenuItem[] = [
    {
      title: 'Add Food',
      icon: 'person-outline',
    },
    {
      title: 'See Food List',
      icon: 'unlock-outline',
    },
  ];

  addList()
  {
    if(!(this.name == '' && this.calories == 0 && this.image=='')){
    this.inputList = {
    name: this.name,
    calory: this.calories,
    imageurl: this.image
    };
    this.newList = [...this.newList, this.inputList];
    this.name='';
    this.calories=0;
    this.image='';
    }
  }

  // setsidenavemenu(){
  //   this.sidenavemenu = !this.sidenavemenu;
  //   // this.cd.detectChanges(); // trigger change detection
  //   console.log(this.sidenavemenu);
  // }

  setShowAddFood(){
    this.showAddFood = true;
    this.showFoodList = false;
  }

  setShowFoodList(){
    this.showFoodList = true;
    this.showAddFood = false;
  }

}