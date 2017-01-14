import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {IImages} from '../../interface/images';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class HttpService {
    imgUrl: string= "../assets/api/pics.json";
//  contactUrl: string = 'https://shopdev.ariix.com/OnlineServices/endPointsAPI/pushCustomerInfo'; //firstname=fName&lastname=lName&emailAddr=fname@email.com
 // languageUrl: string = '/api/languages.json';
  images = new BehaviorSubject<IImages[]>([]);
  imagesAnnounced$ = this.images.asObservable();

  // info
  language: string = 'English';
  languages = [];
  content = new BehaviorSubject<any>([]);
  languageKey = new BehaviorSubject<string>(this.language);

  contentAnnounced$ = this.content.asObservable();
  languageAnnounced$ = this.languageKey.asObservable();

  constructor(private _http: Http) {
      // this.getLanguages();
      this.getImages();
  }

  getImages() {
      this._http.get(this.imgUrl).subscribe((response: any) => {
          let res = response.json();
          JSON.stringify(res);
          this.updateImages(res);
      });
  }
  updateImages(images: IImages[]) {
      this.images.next(images);
  }

    getInfo(url) {
        return this._http.get(url).map(res => res.json());
    }

    updateContent() {
        let content = this.languages[this.language];
        this.content.next(content);
    }

    updateLanguageKey(value) {
        this.languageKey.next(value);
    }

    updateLanguage(key) {
        this.language = key;
        this.updateContent();
        this.updateLanguageKey(this.language);
    }

    receivelanguages(data) {
        let lang = data[0];
        this.languages = lang;
        this.updateContent();
    }

    // getLanguages() {
    //     // this.getInfo(this.languageUrl).subscribe(
    //         data => this.receivelanguages(data),
    //         error => console.log('Error HTTP Service')
    //     );
    // }

    setLanguages(language) {
        this.language = language;

        // change language
        if (language === 'english') {
            this.updateLanguage('English');
        } else if (language === 'dutch') {
            this.updateLanguage('Dutch');
        } else if (language === 'spanish') {
            this.updateLanguage('Spanish');
        }
    }

    // postContact(model: any) {

    //     let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    //     let params = `firstname=${model.firstname}&lastname=${model.lastname}&emailAddr=${model.emailAddr}`;

    //     return this._http.post(this.contactUrl, params, {headers: headers})
    //         .map(res => res.json())
    //         .catch(this.handleError);
    // }

    // private handleError (error: Response) {
    //     return Observable.throw(error.json().error || ' error');
    // }

}
