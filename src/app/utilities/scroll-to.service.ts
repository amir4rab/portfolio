import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ScrollToService {

  constructor() { }

  fn(elementId: string): void{
    switch(elementId[0]){
      case '#' : {
        try {
          document.getElementById(elementId.slice(1)).scrollIntoView({behavior: "smooth", block: "end"});
        } catch {
          console.warn('no element has been found');
        }
      }
      case '.' : {
        try {
          document.querySelector(elementId).scrollIntoView({behavior: "smooth", block: "end"});
        } catch {
          console.warn('no element has been found');
        }
      }
      default : {
        try {
          document.querySelector(elementId).scrollIntoView({behavior: "smooth", block: "end"});
        } catch {
          console.warn('no element has been found');
        }
      }
    }
  }
}
