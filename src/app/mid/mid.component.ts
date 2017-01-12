import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

declare var TweenMax: any;
declare var TimelineMax: any;

=======
>>>>>>> 7b930855d9e1c9143c8a9f16437d0cfbe3beb912

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent implements OnInit {
<<<<<<< HEAD
  imageUrl =  '../app/api/pics.json'; //'https://shopdev.ariix.com/OnlineServices/API/distInfo?distId=2641367';
  images: any;
  info  = [];

  constructor( private _http: Http) {
   }

  //  getInfo() {
  //   this._http.get(this.imageUrl)
  //     .flatMap((data) => data.json())

  //     .subscribe(
  //     (data) => {
  //       this.info.push(data);
  //     }

  //     );
  // }

  ngOnInit() {
   // this.getInfo();
=======

  constructor() { }

  ngOnInit() {
>>>>>>> 7b930855d9e1c9143c8a9f16437d0cfbe3beb912
  }

}
