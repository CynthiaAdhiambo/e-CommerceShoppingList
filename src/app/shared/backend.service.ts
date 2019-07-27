import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getCartTotal() {
    const fakeresponse = '10';
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }

  getUserStatus() {
    const fakeresponse =  true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse);
        }, 2000);
      }
    );
  }
}
