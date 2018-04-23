// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular'; 
// import { MenuController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

//   }
   
// }

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  icons="info";  
  items = [];
     doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     setTimeout(() => {
        this.items = [];
        for (var i = 0; i < 30; i++) {
         this.items.push( this.items.length );
       }
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }
   doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}