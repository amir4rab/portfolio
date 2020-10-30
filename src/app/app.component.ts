import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  options = {
    // root: document.querySelector('body'),
    rootMargin: '0px',
    threshold: 1.0
  }
  target: HTMLElement = null;
  constructor (  ) {
    this.doStuff(this.ob);
  }
  doStuff(fn){
    setTimeout(fn, 1);
  }
  ob(){
    let targetEl;
    targetEl = document.getElementById('home');

    const callback = (entries, observer): void => {
      entries.forEach(entry => {
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time

        console.log(entry);
      });
    }

    const observer = new IntersectionObserver(callback, this.options);
    console.log(document.getElementById('home'));

    observer.observe(targetEl);
  }
}
