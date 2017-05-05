import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  styles: string = "ui top attached demo menu"
  sidebarVisible = 'ui left demo vertical inverted labeled icon sidebar menu slide along visible'
  sidebarHidden = 'ui left demo vertical inverted labeled icon sidebar menu'
  

  pusher: string = 'pusher'
  pusherDimmed: string = 'pusher'
  isClicked: boolean = false
  constructor() { }

  ngOnInit() {
  }

  menuClicked(): boolean {
    return this.isClicked = !this.isClicked    
  }

}
