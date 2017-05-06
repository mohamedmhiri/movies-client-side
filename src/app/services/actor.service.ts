import { Actor } from './../models/actor';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

@Injectable()
export class ActorService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  url = 'https://mysterious-bastion-28491.herokuapp.com/api/'
  getAll() {
    return this.http.get(`${this.url}actors`)
      .map(res => res.json());
  }
  addOne(actor) {
    return this.http.post(`${this.url}actors`,
      JSON.stringify(actor),
      { headers: this.headers })
        .map(response => response.json());
  }

  removeOne(actor) {
    console.log(actor);
    actor.isDeleted = 1
    return this.http.put(`${this.url}actors/${actor._id}/delete`,
      JSON.stringify(actor),
      { headers: this.headers })
        .map(response => response.json());

  }
  updateOne(actor) {
    return this.http.put(`${this.url}actors/${actor._id}/update`,
      JSON.stringify(actor),
      { headers: this.headers })
        .map(response => response.json());

  }
  getOne(_id) {
    return this.http.get(`${this.url}actors/${_id}`)
    .map(res => res.json())
  }
  toFormGroup(actors: Actor[] ) {
    let group: any = {};
    return new FormGroup(group);
  }

}
