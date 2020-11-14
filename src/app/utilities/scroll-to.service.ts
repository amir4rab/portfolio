import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { 
    document.querySelector('html').classList.add('html-scroll-snap');
  }

  fn(elementId: string): void{
    switch(elementId[0]){
      case '#' : {
        try {
          // this.animateScroll(document.getElementById(elementId.slice(1)));
          document.getElementById(elementId.slice(1)).scrollIntoView();
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
      case '.' : {
        try {
          // this.animateScroll(document.querySelector(elementId));
          document.getElementsByClassName(elementId)[0].scrollIntoView();
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
      default : {
        try {
          // this.animateScroll(document.querySelector(elementId));
          document.querySelector(elementId).scrollIntoView();
          break
        } catch {
          console.warn('no element has been found');
          break
        }
      }
    }
  }
  animateScroll(el: HTMLElement): void{
    const htmlEl = document.querySelector('html');

    htmlEl.classList.remove('html-scroll-snap');
    
    let startTime: number = null;
    const anmiationD: number = 500;
    
    let pageScrollY: number = window.pageYOffset;
    
    const deltaY =  el.offsetTop - window.pageYOffset;
    
    let stepY: number = null;

    let lastElapesd: number = 0;
    
    function animatingScroll(timestamp: number){

      if( startTime === null ){
        startTime = timestamp;
        if ( timestamp - startTime < 32 ) {
          stepY = deltaY / (anmiationD / 100 * 6);
        } else {
          stepY = deltaY / (anmiationD / 100 * 3);
        }
      } 
      
      const elapesd = timestamp - startTime;
      console.log((timestamp - startTime) - lastElapesd);
      lastElapesd = elapesd;

      pageScrollY = pageScrollY + stepY;

      window.scrollTo(0, pageScrollY);

      if ( elapesd < anmiationD ) {
        window.requestAnimationFrame(animatingScroll);
      }else{
        htmlEl.classList.add('html-scroll-snap');
      }
    }
    window.requestAnimationFrame(animatingScroll);
  }
}
