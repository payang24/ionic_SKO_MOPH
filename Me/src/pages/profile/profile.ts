import {
  Component
} from '@angular/core';
import {
  NavController,
  NavParams
} from 'ionic-angular';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  //กำหนดประเภท Typescript
  id: number;
  name: string;
  sex: string;
  cid: string;
  birth: string;
  claim: string;
  mobile: string;
  email: string;
  in_hospital: string;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams, //รับค่าจาก home
  ) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
    this.sex = this.navParams.get('sex');
    this.cid = this.navParams.get('cid');
    this.birth = this.navParams.get('birth');
    this.claim = this.navParams.get('claim');
    this.mobile = this.navParams.get('mobile');
    this.email = this.navParams.get('email');
    this.in_hospital = this.navParams.get('in_hospital');
  }

  ionViewWillEnter() { //ให้โหลดข้อมูลหน้านี้ตลอด
    console.log('Hello ProfilePage Page');
  }

}
