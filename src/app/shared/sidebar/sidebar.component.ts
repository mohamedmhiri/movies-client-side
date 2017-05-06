import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  styles: string = "ui top attached demo menu"
  sidebarVisible = 'ui sidebar left vertical inverted sidebar labeled menu huge overlay visible'
  sidebarHidden = 'ui sidebar left vertical inverted sidebar labeled menu huge'
  

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
