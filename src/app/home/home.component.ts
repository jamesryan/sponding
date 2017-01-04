import { Component, OnInit } from '@angular/core';

declare var TweenMax: any;
declare var TimelineMax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  fo: string = '#fo';

  constructor() { }



  ngOnInit() {
    // TweenMax.to("#fo", 7, {
    //   scale: 0.3,
    //   rotation: 480
    // });

  }

}
