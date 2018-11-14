import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEntryPage } from '../add-entry/add-entry';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  // push the add entry page onto the nav stack
  addEntry() {
    this.navCtrl.push(AddEntryPage);
  }

}
