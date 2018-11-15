import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEntryPage } from '../add-entry/add-entry';
import { BinderService } from '../../providers/binder/binder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // analagous array of entries in the component (init as empty list)
  entries: {title: string}[] = [];

  constructor(public navCtrl: NavController,
    private binderService: BinderService
    ) {  }

    // life cycle events for when this page is about to get viewed
  ionViewWillEnter() {
    this.entries = this.getAllEntries();
  }
  
  // push the add entry page onto the nav stack
  addEntry() {
    this.navCtrl.push(AddEntryPage);
  }

  // get copy of all entries from the binder service
  getAllEntries() {
    return this.binderService.getAllEntries();
  }

}
