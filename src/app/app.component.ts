import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth';
import { User } from '../interfaces/user';
import { UserService } from '../services/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  user: User;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
              private authService: AuthService, private userService: UserService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Profile', component: ProfilePage },
      { title: 'About', component: AboutPage}
    ];

    this.authService.getStatus().subscribe((session) => {
      if(!session) {
        return;
      }
      if(!session.uid) {
        return;
      }
      this.userService.getUser(session.uid).valueChanges().subscribe((user: User) => {
        this.user = user;
        this.nav.setRoot(HomePage);
      },(error) => { console.log(error); });
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.authService.logout().then(() => {
      this.nav.setRoot(LoginPage);
    }).catch((error) => {
      console.log(error);
    });
  }
}
