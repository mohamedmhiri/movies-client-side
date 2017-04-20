import { Router } from '@angular/router';
import { Movie } from './../models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
  providers: [MovieService]
})
export class NewMovieComponent implements OnInit {
  @Input() movie: Movie
  constructor(
    private movieService: MovieService,
    private location: Location,
    private route: Router
  ) { }

  ngOnInit() {
    this.movie = new Movie()
  }
  save(movie): void {
    this.movieService.addOne(movie)
    .subscribe(
       data => {
         console.log('Success Added' + data)
       }
    )
  }
  goBack(): void {
    this.location.back();
  }
  goToMovies(): void {
    this.route.navigateByUrl('/movies')
  }
}
