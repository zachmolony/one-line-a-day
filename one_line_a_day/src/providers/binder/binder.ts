import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class BinderService {

  private binder: { title: string } [] = [];

  constructor(public http: HttpClient) {

  }

  // push new note to binder
  saveEntry(entry: {title: string}) {
    this.binder.push(entry);
  }

}
