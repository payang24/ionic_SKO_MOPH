import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//import เมื่อสร้าง page ใหม่
import {ProfilePage} from '../pages/profile/profile';
import {SettingPage} from '../pages/setting/setting';
import {AppointmentPage} from '../pages/appointment/appointment';
import {AddPage} from '../pages/add/add';
import {Users} from '../providers/users';

@NgModule({
  declarations: [//เพิ่มชื่อ page เมื่อสร้าง page ใหม่
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    SettingPage,
    AppointmentPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [//เพิ่มชื่อ page เมื่อสร้าง page ใหม่
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProfilePage,
    SettingPage,
    AppointmentPage,
    AddPage
  ],
  providers: [
    Users,
    { provide: 'API_URL', useValue: 'http://192.168.3.248:3000'},
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
