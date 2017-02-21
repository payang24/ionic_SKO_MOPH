import { Injectable,Inject } from '@angular/core';
import { Http,Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Users {

  constructor(public http: Http, @Inject('API_URL') private url: string) {
    console.log('Hello Users Provider');
  }
  //รับ get ค่าจาก url
    getUsers() {
    return new Promise((resolve, reject) => {//resolve=ใช่ reject=ไม่
      this.http.get('http://192.168.3.248:3000/users')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
    save(username: string, name: string, email: string, group_id: string) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = { username: username, name: name, email: email, group_id: group_id };

      this.http.post(`${this.url}/users`, body, options)
      // this.http.get(this.url + '/users')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }
    getGroups() {
    return new Promise((resolve, reject) => {//resolve=ใช่ reject=ไม่
      this.http.get('http://192.168.3.248:3000/groups')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data)
        }, err => {
          reject(err)
        });
    });
  }

}
