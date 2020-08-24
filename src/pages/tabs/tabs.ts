import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';

import { LetrasPage } from '../letras/letras';
import { NumerosPage } from '../numeros/numeros';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LetrasPage;
  tab2Root = NumerosPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
