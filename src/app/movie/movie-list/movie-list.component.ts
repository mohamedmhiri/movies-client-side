import { Movie } from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit, OnChanges {
  public  movies: Array<Movie>
  movieToUpdate: Movie
  @Output()
  myClick = new EventEmitter<Movie>()
  constructor(private service: MovieService) { }

  ngOnInit() {
    this.service
    .getAll()
    .subscribe(data=> {
      this.movies = data
      console.log(this.movies)
    })
  }

  ngOnChanges() {
    this.service
    .getAll()
    .subscribe(data=> {
      this.movies = data
      console.log(this.movies)
    })
  }
  /*@Input()
  set movies(movies: Array<Movie>) {
    this._movies = movies
  }
  get movies(): Array<Movie> { return this._movies }*/



  delete(i, movie) {
    movie.isDeleted = 1
    this.movies.splice(i, 1) 
    this
    .service
    .removeOne(movie)
    .subscribe(movie => {

      console.log(`${movie} deleted`)
    })
  }
  onClicked() {
    this.myClick.emit(this.movieToUpdate)
  }
  update(i, movie) {
    console.log(i)
    this.movieToUpdate = movie
    this.onClicked()
  }


}
