import { Component } from '@angular/core';

import { Events, NavController, LoadingController, NavParams  } from 'ionic-angular';
import { LoginPage} from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
   ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  // logout(){
  //   this.events.publish('logout');
  // }


}
