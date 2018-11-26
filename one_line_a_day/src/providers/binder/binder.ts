import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Entry } from '../../models/note.model';

@Injectable()
export class BinderService {

  private binder: Entry[] = [];

  constructor(public storage: Storage) {

  }

  // push new note to binder
  saveEntry(entry: Entry) {
    entry.createDate = Date.now();
    this.binder.push(entry);
    // assign binder to 'binder' key
    this.storage.set('binder', this.binder);
  }

  // return a copy of binder contents
  getAllEntries() {
    return this.storage.get('binder').then(
      (binder) => {
        // handle empty binder
        this.binder = binder === null ? [] : binder;
        return [...this.binder];
      }
    )
  }

}
