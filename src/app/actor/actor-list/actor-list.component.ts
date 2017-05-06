import { Actor } from './../../models/actor';
import { ActorService } from './../../services/actor.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css'],
  providers: [ActorService]
})
export class ActorListComponent implements OnInit {
  actors: Array<Actor> = []
  actorToUpdate: Actor
  @Output()
  myClick = new EventEmitter<Actor>()
  constructor(private service: ActorService) { }

  ngOnInit() {
    this.service
    .getAll()
    .subscribe(data=> {
      this.actors = data
      console.log(this.actors)
    })
  }

  ngOnChanges() {
    this.service
    .getAll()
    .subscribe(data=> {
      this.actors = data
      console.log(this.actors)
    })
  }
  delete(i) {
    console.log(i)
  }
  onClicked() {
    this.myClick.emit(this.actorToUpdate)
  }
  update(i, actor) {
    console.log(i)
    this.actorToUpdate = actor
    this.onClicked()
  }

}
