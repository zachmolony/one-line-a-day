import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BinderService } from '../../providers/binder/binder';
import { Entry } from '../../models/note.model';
import { FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-add-entry',
  templateUrl: 'add-entry.html',
})
export class AddEntryPage {
  formGroup: FormGroup;
  entry: Entry;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController,
    private binderService: BinderService) {
      this.formGroup
  }

  // invokes saveEntry from binderService
  saveEntry(entry: Entry) {
    this.binderService.saveEntry(entry);
  }

}
