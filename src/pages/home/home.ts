import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { LoginPage } from '../login/login';
import { User } from '../../app/interfaces/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user1: User = {
    nick: 'CLemens',
    subnick: 'Clele',
    age: 32,
    email: 'cle@gmail.com',
    friend: true,
    uid: 1
  };

  user2: User = {
    nick: 'Roberto',
    subnick: 'Lechon',
    age: 30,
    email: 'lechon@gmail.com',
    friend: true,
    uid: 2
  };

  user3: User = {
    nick: 'Claudio',
    subnick: 'Pollo',
    age: 31,
    email: 'pollo@gmail.com',
    friend: false,
    uid: 3
  };

  user4: User = {
    nick: 'Willia',
    subnick: 'Coche',
    age: 31,
    email: 'Coche@gmail.com',
    friend: true,
    uid: 4
  };
  
  user5: User = {
    nick: 'Isaac',
    subnick: 'isa',
    age: 31,
    email: 'isa@gmail.com',
    friend: false,
    uid: 5
  };

  users: any = [this.user1, this.user2, this.user3, this.user4, this.user5];

  constructor(public navCtrl: NavController) {
  
  }
  
  goToChat() {
    this.navCtrl.push(ChatPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
