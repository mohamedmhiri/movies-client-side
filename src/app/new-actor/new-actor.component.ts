import { Router } from '@angular/router';
import { Actor } from './../models/actor';
import { ActorService } from './../services/actor.service';
import { Component, OnInit, Input } from '@angular/core';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-new-actor',
  templateUrl: './new-actor.component.html',
  styleUrls: ['./new-actor.component.css'],
  providers: [ActorService]
})
export class NewActorComponent implements OnInit {
  @Input() actor: Actor
  constructor(
    private actorService: ActorService,
    private location: Location,
    private route: Router
  ) { }

  ngOnInit() {
    this.actor = new Actor()
  }
  save(actor): void {
    this.actorService.addOne(actor)
    .subscribe(
       data => {
         console.log('Success Added' + data)
       }
    )
  }
  goBack(): void {
    this.location.back();
  }
  goToActors(): void {
    this.route.navigateByUrl('/actors')
  }
}
