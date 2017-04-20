import { Router } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Movie } from './../models/movie';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  movies : Movie[]
  constructor(
    private movieService: MovieService,
    private route: Router
    ) {
  }  

  ngOnInit() {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies
    })
  }
  goToNew(): void {
    this.route.navigateByUrl('/new-movie')
  }

}
