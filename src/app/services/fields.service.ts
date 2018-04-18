import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
@Injectable()
export class FieldsService {

  userDetails:BehaviorSubject<any>= new BehaviorSubject(this.userDetails);
  userDetails$=this.userDetails.asObservable();

  constructor() { }

  storeUserDetails(u){
    this.userDetails.next(u);
  }
}
