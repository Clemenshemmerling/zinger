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

}
