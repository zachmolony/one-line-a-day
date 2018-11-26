import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BinderService } from '../../providers/binder/binder';
import { Entry } from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-add-entry',
  templateUrl: 'add-entry.html',
})
export class AddEntryPage {

  constructor(public navCtrl: NavController,
    private binderService: BinderService) {
  }

  // invokes saveEntry from binderService
  saveEntry(entry: Entry) {
    this.binderService.saveEntry(entry);
  }

}
