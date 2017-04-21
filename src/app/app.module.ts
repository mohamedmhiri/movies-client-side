import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { ErrorComponent } from './error/error.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { NewActorComponent } from './new-actor/new-actor.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    HeaderComponent,
    MovieDetailComponent,
    ActorDetailComponent,
    ErrorComponent,
    NewMovieComponent,
    NewActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
