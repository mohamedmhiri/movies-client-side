import { Movie } from './../models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit, OnChanges {
  //private _movies: Array<Movie>
  constructor(private service: MovieService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }
  /*@Input()
  set movies(movies: Array<Movie>) {
    this._movies = movies
  }
  get movies(): Array<Movie> { return this._movies }*/


}
