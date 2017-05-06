import { ActorService } from './../../services/actor.service';
import { Actor } from './../../models/actor';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css'],
  providers: [ActorService]
})
export class ActorFormComponent implements OnInit, OnChanges {
  public actor: Actor
  public submit: string = ''
  constructor(private service: ActorService) { }

  ngOnInit() {
    this.actor = new Actor()
    this.submit = 'Add'
  }

  ngOnChanges() {

  }
  add(actor) {
    this.service.addOne(actor)
    .subscribe( data => {
      console.log(`${actor} successfully added`)
    })
  }

  update(actor) {
    this.service.updateOne(actor)
    .subscribe( data => {
      console.log(`${actor} successfully updated`)
    })
  }

}
