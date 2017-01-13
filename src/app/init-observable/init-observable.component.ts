import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-init-observable',
  templateUrl: './init-observable.component.html',
  styleUrls: ['./init-observable.component.scss']
})
export class InitObservableComponent implements OnInit {

  constructor() { }

  initObserver () {
    let keys$ = Observable.fromEvent(document, 'keyup')
    .do((keyUp: KeyboardEvent) => console.log(keyUp.key));
    keys$.subscribe();
  }

  ngOnInit() {
    this.initObserver();
  }

}
