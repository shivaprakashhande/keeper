import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class KeeperService {

  constructor(private http: Http) { }

  createUser(f) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api', JSON.stringify(f.value), options).map(res => { return res.json() });
  }

  createNote(f,e) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
f.value.email = e;
    return this.http.post('/api/addNote', JSON.stringify(f.value), options).map(res => { return res.json() });
  }

  getUser(e: String) {
    return this.http.get('/api/' + e).map(res => { return res.json() });
  }

  getUserDetails(e: String) {
    return this.http.get('/api/user/' + e).map(res => { return res.json() });
  }

  getNoteDetails(e: String) {
    return this.http.get('/api/notes/' + e).map(res => { return res.json() });
  }
}
