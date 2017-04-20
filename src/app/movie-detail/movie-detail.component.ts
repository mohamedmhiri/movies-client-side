import { MovieService } from './../services/movie.service';
import { Movie } from './../models/movie';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.movieService.getOne((+params['_id'])))
    .subscribe(movie => this.movie = movie)
  }
  goBack(): void {
    this.location.back();
  }
  save(movie): void {
    this.movieService.updateOne(movie)
     .subscribe(
       data => {
         console.log('Success updating' + data)
       }
    )
  }

}
