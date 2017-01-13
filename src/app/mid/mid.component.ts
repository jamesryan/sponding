import { Component, OnInit } from '@angular/core';
import {HttpService} from '../services/http.service';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

declare var TweenMax: any;
declare var TimelineMax: any;



@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent implements OnInit {
  images;
  url: string = '';
  name: string = '';


  // imageUrl =  '../app/api/pics.json'; //'https://shopdev.ariix.com/OnlineServices/API/distInfo?distId=2641367';

  // info  = [];

  constructor( private _httpService: HttpService) {
     _httpService.imagesAnnounced$.subscribe(
        (value) => {
            // this.fetchImages(value);
            this.images = value;
            console.log(this.images);
        });
   }
    fetchImages(images) {
        // images.forEach(function(i) {
        //     i.quantity = 0;
        // });

        this.images = images;
    }


  

  ngOnInit() {
  
  }

}
