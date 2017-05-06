import { Movie } from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [MovieService]
})
export class MovieFormComponent implements OnInit {
public movie: Movie
  public submit: string = ''
  constructor(private service: MovieService) { }

  ngOnInit() {
    this.movie = new Movie()
    this.submit = 'Add'
  }

  ngOnChanges() {

  }
  add(movie) {
    this.service.addOne(movie)
    .subscribe( data => {
      console.log(`${movie} successfully added`)
    })
  }

  update(movie) {
    this.service.updateOne(movie)
    .subscribe( data => {
      console.log(`${movie} successfully updated`)
    })
  }

}
