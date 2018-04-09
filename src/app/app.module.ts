<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
<<<<<<< HEAD
=======
import { HttpModule, JsonpModule } from '@angular/http';
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
<<<<<<< HEAD
import { InforPage } from '../pages/infor/infor';
=======
import { LoginPage } from '../pages/login/login';
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    InforPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
=======
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    JsonpModule,
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
<<<<<<< HEAD
    InforPage
=======
    LoginPage
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
<<<<<<< HEAD
=======
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ComponentsComponent } from './components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    HeaderComponent,
    BodyComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path:'todolist',component:TodolistComponent},
      {path:'doodslist',component:GoodslistComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:BodyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> b0427696f858a7eecf7319e88446f4f55d3f74f8
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
