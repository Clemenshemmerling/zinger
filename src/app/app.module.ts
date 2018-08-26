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
    AboutPageModule
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
    UserService
  ]
})
export class AppModule {}
