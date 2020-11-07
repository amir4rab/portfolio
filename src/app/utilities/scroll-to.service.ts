import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  fn(elementId: string): void{
    switch(elementId[0]){
      case '#' : {
        try {
          this.animateScroll(document.getElementById(elementId.slice(1)));
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
      case '.' : {
        try {
          this.animateScroll(document.querySelector(elementId));
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
      default : {
        try {
          this.animateScroll(document.querySelector(elementId));
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
    }
  }
  animateScroll(el: HTMLElement): void{  
    let startTime: number = null;
    const anmiationD: number = 500;

    let pageScrollY: number = window.pageYOffset;

    const deltaY =  el.offsetTop - window.pageYOffset;

    const stepY = deltaY / (anmiationD / 100 * 6);

    function animatingScroll(timestamp: number){
      if( startTime === null ){
        startTime = timestamp;
      } 
      const elapesd = timestamp - startTime;
      
      pageScrollY = pageScrollY + stepY;

      window.scrollTo(0, pageScrollY);

      if ( elapesd < anmiationD ) {
        window.requestAnimationFrame(animatingScroll);
      }
    }
    window.requestAnimationFrame(animatingScroll);
  }
}
