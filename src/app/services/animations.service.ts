import {style, animate, transition, state, trigger} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Animations {
    public overlayXDelay = 500;
    private overlay = new BehaviorSubject<boolean>(false);
    overlayAnnounced$ = this.overlay.asObservable();

    updateOverlay(value) {
        this.overlay.next(value);
    }

    updateOverlayAfterInterval(interval) {
        setTimeout(() => {
            this.updateOverlay(false);
        }, interval);
    }

    animateIn(el) {
        el.classList.add('show');
    }

    isElementVisible(el) {
        let scrollTop = el.scrollTop;
        let closeDiv = document.getElementById('close');
        return scrollTop < closeDiv.clientHeight;
    }

    closeAnimation(el, event) {
        if (this.isElementVisible(el)) {
            setTimeout(() => {
            event.emit({});
            }, 150);
        } else {
            event.emit({});
        }
    }

    // SCROLL

    currentYPosition() {
        if (self.pageYOffset) {
            return self.pageYOffset;
        }
        if (document.documentElement && document.documentElement.scrollTop) {
            return document.documentElement.scrollTop;
        }
        if (document.body.scrollTop) {
            return document.body.scrollTop;
        }
        return 0;
    }

    elmYPosition(eID) {
        let elm = document.getElementById(eID);
        let y = elm.offsetTop;
        let node: any = elm;
        while (node.offsetParent && node.offsetParent !== document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }

    scrollAnimation(eID) {
        let startY = this.currentYPosition(),
        stopY = this.elmYPosition(eID),
        distance = stopY > startY ? stopY - startY : startY - stopY;

        if (distance < 100) {
            scrollTo(0, stopY); return;
        }

        //change speed here
        let speed = Math.round(distance / 100);
        // if (speed >= 20) { speed = 20; }
        if (speed >= 60) { speed = 60; }

        let step = Math.round(distance / 25);

        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
            for ( let i = startY; i < stopY; i += step ) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step; if (leapY > stopY) { leapY = stopY; } timer++;
            } return;
        }
        for ( let i = startY; i > stopY; i -= step ) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step; if (leapY < stopY) {leapY = stopY; } timer++;
        }
    }
}
