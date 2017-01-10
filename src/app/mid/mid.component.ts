import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent implements OnInit {
  imageUrl =  '../app/api/pics.json'; //'https://shopdev.ariix.com/OnlineServices/API/distInfo?distId=2641367';
  images: any;
  info  = [];

  constructor( private _http: Http) {
   }

   getInfo() {
    this._http.get(this.imageUrl)
      .flatMap((data) => data.json())

      .subscribe(
      (data) => {
        this.info.push(data);
      }

      );
      

  }
   
  //  getImages(url) {
  //    console.log(this._http.get(this.imageUrl).map(res => res.json()));
  //    return this._http.get(url).map(res => res.json())
     
  //  }

  //  getImaging() {
  //    this.getImages(this.imageUrl).subscribe(
  //      data => this.receiveImages(data),
  //      error => console.log('Error in service')
  //    )
  //  }

  //  receiveImages(data) {
  //    let img = data[0];
  //    this.images = img;
  //    //console.log('F ' + img.url);
  //  }

  ngOnInit() {
   this.getInfo();
  }

}
