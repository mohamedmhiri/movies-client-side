import { Actor } from './../models/actor';
import { Component, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit, OnChanges {
  @Output() value = new EventEmitter()
  public actor: Actor
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    
  }
  onActorreceived() {
    this.value.emit(this.actor)
  }
  onClicked(value: Actor) {
    this.actor = value
  }

}
