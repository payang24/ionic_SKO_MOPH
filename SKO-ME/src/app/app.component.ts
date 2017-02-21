import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SettingPage } from '../pages/setting/setting';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, public events: Events) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();

      let token = localStorage.getItem('token');//รับค่า token
      console.log(':=' + token);
      if (token) this.rootPage = SettingPage;//ถ้ามีให้เปิดหน้า tabpage
      else this.rootPage = LoginPage;//ถ้าไม่มีให้เปิดหน้า login
      /*
            events.subscribe('logout',() =>{
              console.log('Logout');
              localStorage.removeItem('token');
              this.rootPage = LoginPage;
            });
      
            */

    });
  }


  /*constructor(platform: Platform) {
  let token = localStorage.getItem('token');
  if (token) {
    this.rootPage = TabsPage;
  } else {
    this.rootPage = LoginPage;
  }
  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    StatusBar.backgroundColorByHexString('#00695C');
    Splashscreen.hide();
  });
}
*/

}
