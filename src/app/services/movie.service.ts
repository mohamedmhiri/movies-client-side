import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  url = 'https://mysterious-bastion-28491.herokuapp.com/api/'
  getAll() {
    return this.http.get(`${this.url}movies`)
      .map(res => res.json());
  }
  addOne(movie) {
    return this.http.post(`${this.url}movies`,
      JSON.stringify(movie),
      { headers: this.headers })
        .map(response => response.json());
  }

  removeOne(movie) {
    console.log(movie);
    return this.http.put(`${this.url}movies/${movie._id}/delete`,
      JSON.stringify(movie),
      { headers: this.headers })
        .map(response => response.json());

  }




  updateOne(movie) {
    return this.http.put(`${this.url}movies/${movie._id}/update`,
      JSON.stringify(movie),
      { headers: this.headers })
        .map(response => response.json());

  }
  getOne(_id) {
    return this.http.get(`${this.url}movies/${_id}`)
    .map(res => res.json())
  }

}
