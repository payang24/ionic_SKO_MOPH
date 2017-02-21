import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage} from '../pages/message/message';
import { SettingPage} from '../pages/setting/setting';
import { LoginPage} from '../pages/login/login';
import { Login} from '../providers/login';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessagePage,
    SettingPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MessagePage,
    SettingPage,
    LoginPage
  ],
  providers: [Login,
    {provide: 'API_URL', useValue: 'http://192.168.43.72:3000' },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
