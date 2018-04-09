import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
<<<<<<< HEAD
import { InforPage } from '../infor/infor';
=======
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
<<<<<<< HEAD
  tab4Root = InforPage;

=======
>>>>>>> c0a3f648a504822c77326bdd350498e5fc026082
  constructor() {

  }
}
