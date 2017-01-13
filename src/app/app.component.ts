import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Animations} from './services/animations.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sponding...';
  isactive:boolean = false;
  @Output() menuStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  menuOpen: boolean  = false;
  openClass = 'open';

  constructor(private animate: Animations) {

  }
  menuChange(value) {
    this.menuStatusChange.emit(value);
  }
  menuOpener() {
    this.menuChange(true);
  }
  menuClose() {
    this.menuChange(false);
  }

  // toggleMenu() {
  //   if(!this.menuOpen) {
  //     this.menuOpen = true;
  //   }
  //   else {
  //     this.menuOpen = false;
  //   }
  //   this.menuChange(this.menuOpen);
  // }

  toggleMenu() {

    this.menuOpen = !this.menuOpen;
    this.openClass = this.menuOpen ? 'open' : 'close';
  }
}
