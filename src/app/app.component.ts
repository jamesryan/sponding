import { Component, Input, EventEmitter } from '@angular/core';
import {Animations} from './services/animations.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sponding...';
  isactive:boolean = false;

  constructor(private animate: Animations) {

  }

  openMenu() {
    
  }
}
