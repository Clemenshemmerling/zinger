import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { LoginPageModule } from '../pages/login/login.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPageModule } from '../pages/about/about.module';
import { UserService } from '../services/user';
import { SearchPipe } from '../pipes/search';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../services/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAyiNTa3uSS4q5QDDaof6XvZ2vOWEGJCuo",
  authDomain: "zinger-cc5ef.firebaseapp.com",
  databaseURL: "https://zinger-cc5ef.firebaseio.com",
  projectId: "zinger-cc5ef",
  storageBucket: "zinger-cc5ef.appspot.com",
  messagingSenderId: "841297612535"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ChatPageModule,
    ProfilePageModule,
    AboutPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}
