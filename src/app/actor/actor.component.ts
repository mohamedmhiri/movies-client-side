import { Router } from '@angular/router';
import { ActorService } from './../services/actor.service';
import { Actor } from './../models/actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
    providers: [ActorService]

})
export class ActorComponent implements OnInit {
  actors: Actor[]
  constructor(
    private actorService: ActorService,
    private route: Router
    ) {  }

  ngOnInit() {
    this.actorService.getAll().subscribe(actors => {
      this.actors = actors
    })
  }
  goToNew(): void {
    this.route.navigateByUrl('/new-actor')
  }

}
