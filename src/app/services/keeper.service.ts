import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class KeeperService {

  constructor(private http: HttpClient) { }

  createUser(f) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post('/api', JSON.stringify(f.value), { headers })
  }

  createNote(f, e) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    f.value.email = e;
    return this.http.post('/api/addNote', JSON.stringify(f.value), {headers});
  }

  getUser(e: String) {
    return this.http.get('/api/' + e)
  }

  getUserDetails(e: String) {
    return this.http.get('/api/user/' + e)
  }

  getNoteDetails(e: String) {
    return this.http.get('/api/notes/' + e)
  }

  deleteNote(i: String) {
    return this.http.delete('/api/deleteNote/' + i)
  }
  updateNote(f, e) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    f.value.email = e;
    return this.http.put('/api/editNote/', JSON.stringify(f.value), {headers});
  }
}
