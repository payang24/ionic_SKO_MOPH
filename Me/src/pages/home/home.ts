import { Component } from '@angular/core';

import { NavController, LoadingController} from 'ionic-angular';
import {ProfilePage} from '../profile/profile';
import {Users} from '../../providers/users';
import {AddPage} from '../add/add';
import {IUser, IHttpResult} from '../../models';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //กำหนดประเภท Typescript
  //name: string;
  
  profile: Array<{id:number, 
                  name:string, 
                  sex:string, 
                  cid:string, 
                  birth:string, 
                  claim:string,
                  mobile:string,
                  email:string,
                  in_hospital:string,
                }>;
users:Array<IUser>;//จาการับค่า get url provider

  constructor(
      public navCtrl: NavController,
      private userProvider: Users,
      private loadingCtrl: LoadingController//คำสั่งให้ขึ้นสถานะการโหลด
      ) {
      this.profile = [
            { id: 1, 
              name:'ศุภชัย เงางาม',
              sex: 'ชาย',
              cid: '1234567890987',
              birth: '21 มิ.ย. 2531',
              claim: 'ประกันสังคม',
              mobile: '0821291291',
              email: 'payang24@gmail.com',
              in_hospital: 'โรงพยาบาลโคกสูง',
          },
          { id: 2, 
              name:'สุเชาว์ เงางาม',
              sex: 'ชาย',
              cid: '0987654321234',
              birth: '5 เม.ย. 2521',
              claim: 'บัตรทอง',
              mobile: '0992166657',
              email: 'doctorcomp24@gmail.com',
              in_hospital: 'โรงพยาบาลโคกสูง',
          },
      ]
  }

ionViewWillEnter() {//คำสั่งให้โหลดทุกครั้ง
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.userProvider.getUsers()
      .then((data: IHttpResult) => { //ดึงค่ที่โหลด
        if (data.ok) {
          this.users = data.rows;
          //คำสั่งดู log
          //console.log(this.users)

        }
        loading.dismiss();
      }, (err) => {
        loading.dismiss();
        console.error(err);
       });
  }

  itemSelected(profile) {
    this.navCtrl.push(ProfilePage, profile);
    // this.navCtrl.push(DetailPage, { name: xxx, id: 123 });
    //ส่งค่าไปหน้า profile
}

  goAddPage(){//ส่งค่าไปหน้า Add
    this.navCtrl.push(AddPage);
  }
}
