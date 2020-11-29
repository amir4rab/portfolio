import { Component } from '@angular/core';
import { GlobalDataService } from './global-data/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  target: HTMLElement = null;
  constructor ( ) {
    // this.doStuff(this.ob);
  }

  // options = {
  //   rootMargin: '0px',
  //   threshold: 1.0
  // }
  // doStuff(fn){
  //   setTimeout(fn, 1);
  // }
  // ob(){
  //   let targetEl;
  //   targetEl = document.getElementById('home');

  //   const callback = (entries, observer): void => {
  //     entries.forEach(entry => {
  //       console.log(entry);
  //     });
  //   }

  //   const observer = new IntersectionObserver(callback, this.options);
  //   console.log(document.getElementById('home'));

  //   observer.observe(targetEl);
  // }
}
