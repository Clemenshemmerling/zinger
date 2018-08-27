import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { Status, User } from '../../interfaces/user';
import { UserService } from '../../services/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  nick: string;
  email: string;
  password: string;
  password2: string;
  status: Status;
  operation: string = 'login';

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, 
              public toastCtrl: ToastController, private userService: UserService) {
  }

  login() {
    this.authService.LoginEmail(this.email, this.password).then((data) => {
      const toast = this.toastCtrl.create({
        message: 'Bienvenido',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(HomePage);
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: 'Ocurrio un error',
        duration: 3000
      });
      toast.present();
      console.log(error);
    });
  }

  sigin() {
    if(this.password !== this.password2) {
      const toast = this.toastCtrl.create({
        message: 'Contraseña no coincide',
        duration: 3000
      });
      toast.present();
      return;
    }
    this.authService.registerEmail(this.email, this.password).then((data) => {
      const user: User = {
        nick : this.nick,
        email: this.email,
        status: this.status,
        friend: true,
        uid: data.user.uid
      }
      this.userService.createUser(user).then((res) => {
        const toast = this.toastCtrl.create({
          message: 'Registardo correctamente',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }).catch((error) => {
        const toast = this.toastCtrl.create({
          message: 'Ocurrio un error',
          duration: 3000
        });
        toast.present();
        console.log(error);
      });
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: 'Ocurrio un error',
        duration: 3000
      });
      toast.present();
      console.log(error);
    });
  }

  facebook() {
    this.authService.fbLogin().then((data) => {
      const user: User = {
        nick : data.user.displayName,
        email: data.user.email,
        status: Status.Online,
        friend: true,
        uid: data.user.uid
      }
      if(data.additionalUserInfo.isNewUser) {
        this.userService.createUser(user).then((data) => {
          const toast = this.toastCtrl.create({
            message: 'Conectado a Facebook con exito',
            duration: 3000
          });
          toast.present();
          this.navCtrl.setRoot(HomePage);     
        }).catch((error) => {
          const toast = this.toastCtrl.create({
            message: 'Error al ingresar con Facebook',
            duration: 3000
          });
          toast.present();
          console.log(error);
        });
      } else {
        const toast = this.toastCtrl.create({
          message: 'Facebook login exitoso',
          duration: 3000
        });
        toast.present();
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((error) => {
      const toast = this.toastCtrl.create({
        message: 'Error al ingresar con Facebook',
        duration: 3000
      });
      toast.present();
      console.log(error);
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

}
