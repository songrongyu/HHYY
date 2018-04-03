import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Http,Jsonp} from '@angular/http';
import { Headers } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  headers = new Headers({'Content-Type':'application/x-www-from-urlencoded'});
  data = this.navParams.data;
  logIn() {
//     if (username.value.length == 0) {
//         alert("请输入账号");
//     } else if (password.value.length == 0) {
//         alert("请输入密码");
//     } else {
//         let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
//         alert(userinfo);
//         this.navCtrl.push(TabsPage);
//     }
// }  
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',username: HTMLInputElement, password: HTMLInputElement},{headers:this.headers}).subscribe(data=>{
      console.log(data); 
      this.navCtrl.push(TabsPage);
    },err=>{
      alert('用户名错误或密码错误');
    });
  }
}
