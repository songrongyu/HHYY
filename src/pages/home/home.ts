import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular'; 
import { MenuController } from 'ionic-angular';
=======
import { LoginPage } from '../login/login';
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {

  }
   
=======
  constructor(public navCtrl: NavController) {

  }
  goSub(){
    this.navCtrl.push(LoginPage);
  }

>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
}
