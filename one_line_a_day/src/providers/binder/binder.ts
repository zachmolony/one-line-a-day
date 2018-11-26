import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Entry } from '../../models/note.model';

@Injectable()
export class BinderService {

  private binder: Entry[] = [];

  constructor() {

  }

  // push new note to binder
  saveEntry(entry: {title: string}) {
    this.binder.push(entry);
  }

  // return a copy of binder contents
  getAllEntries() {
    return [...this.binder] // spread operator
  }

}
