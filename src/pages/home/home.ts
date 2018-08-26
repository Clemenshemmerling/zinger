import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { LoginPage } from '../login/login';
import { UserService } from '../../services/user';
import { Status, User } from '../../interfaces/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  query: string = '';
  status: Status;
  constructor(public navCtrl: NavController, public userService: UserService) {
    this.users = this.userService.get();
    console.log(this.users);
  }
  
  goToChat(user) {
    this.navCtrl.push(ChatPage, {user: user});
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  getIconByStatus(status) {
    let icon = '';

    switch(status) {
      case 'Online':
        icon = 'logo_live_online.png'
          break;
      case 'Offline':
        icon = 'logo_live_offline.png'
          break;
      case 'Busy':
        icon = 'logo_live_busy.png'
          break;
      case 'Away':
        icon = 'logo_live_away.png'
          break;
      case 'AppearOffline':
        icon = 'logo_live_offline.png'
          break;            
    }
    return icon;
  }

}
