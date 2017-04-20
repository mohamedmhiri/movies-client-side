import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewActorComponent } from './new-actor/new-actor.component';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ActorComponent } from './actor/actor.component';
import { MovieComponent } from './movie/movie.component';

const ROUTES = [
    {
        path: 'actors-detail/:_id',
        component: ActorDetailComponent
    },
    {
        path: 'movies-detail/:_id',
        component: MovieDetailComponent
    },
    {
        path: 'new-actor',
        component: NewActorComponent
    },
    {
        path: 'new-movie',
        component: NewMovieComponent
    },
    {
        path: 'movies',
        component: MovieComponent
    },
    {
        path: 'actors',
        component: ActorComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorComponent
    }

]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),// Add routes to the app
  ],
  declarations: [],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
