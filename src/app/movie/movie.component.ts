import { Router } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { Movie } from './../models/movie';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  movies : Movie[]
  @Input() movie: Movie
  constructor(
    private movieService: MovieService,
    private route: Router
    ) {
  }  

  ngOnInit() {
    this.movieService.getAll().subscribe(movies => {
      this.movies = movies
    })
    this.movie = new Movie()
  }
  goToNew(): void {
    this.route.navigateByUrl('/new-movie')
  }
  save(movie): void {
    this.movieService.addOne(movie)
    .subscribe(
       data => {
         console.log(`${ data } successfully Added`)
       }
    )
  }
  delete(movie): void {
    this.movieService.removeOne(movie)
    .subscribe(
      data => {
        console.log(`${ data } is successfully deleted`)
      }
    )
  }

}
