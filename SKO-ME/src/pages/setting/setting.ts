import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Push } from 'ionic-native';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  accept :any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  changeToggle(){
    //console.log(this.accept);
    if(this.accept){
      //ลงทะเบียนอุปกรณ์
      var push = Push.init({
   android: {
       senderID: '269215694177'
   },
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   },
   windows: {}
    });
    
    push.on('registration', (response) =>{
      console.log(response);
      let deviceToken = response.registrationId;
      alert(deviceToken);
    });

   }
  }
  //   logout(){
  //   this.events.publish('logout');
  // }

}
