import { Actor } from './../../models/actor';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'actor-form',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent implements OnInit, OnChanges {
  public actor: Actor
  public submit: string = ''
  constructor() { }

  ngOnInit() {
    this.actor = new Actor()
    this.submit = 'Add'
  }

  ngOnChanges() {

  }

}
