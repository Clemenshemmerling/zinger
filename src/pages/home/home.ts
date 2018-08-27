import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { UserService } from '../../services/user';
import { Status, User } from '../../interfaces/user';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  query: string;
  status: Status;
  user: User;

  constructor(public navCtrl: NavController, public userService: UserService, private authService: AuthService ) {
    const userWatch = this.userService.getUsers();
    userWatch.valueChanges().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    }, (error) => {
      console.log(error);
    });
    this.authService.getStatus().subscribe((session) => {
      if (!session) {
        return;
      }
      if (!session.uid) {
        return;
      }
      this.userService.getUser(session.uid).valueChanges().subscribe((user: User) => {
        this.user = user;
      }, (error) => {
        console.log(error);
      })
    }, (error) => {console.log(error);})
  }
  
  goToChat(user) {
    this.navCtrl.push(ChatPage, {user: user});
    
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
