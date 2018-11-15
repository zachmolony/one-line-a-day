import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BinderService } from '../../providers/binder/binder';

@IonicPage()
@Component({
  selector: 'page-add-entry',
  templateUrl: 'add-entry.html',
})
export class AddEntryPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private binderService: BinderService) {
  }

  saveEntry(entry: {title: string}) {
    this.binderService.saveEntry(entry);
  }

}
