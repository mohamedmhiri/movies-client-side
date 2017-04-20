import { ActorService } from './../services/actor.service';
import { Actor } from './../models/actor';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css'],
  providers: [ActorService]
})
export class ActorDetailComponent implements OnInit {
  @Input() actor: Actor
  constructor(
    private actorService: ActorService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.actorService.getOne((+params['_id'])))
    .subscribe(actor => this.actor = actor)
  }
  goBack(): void {
    this.location.back();
  }
  save(actor): void {
    this.actorService.updateOne(actor)
     .subscribe(
       data => {
         console.log('Success updating' + data)
       }
    )
  }

}
