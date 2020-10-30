import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setTimeout(()=>this.scrollTo('#projects'), 20);
  }


  // scrollTo(element: string): void {
  //   function getElement(): HTMLElement{
  //     switch(element[0]){
  //       case '.': {
  //         return document.querySelector(element);
  //         break
  //       }
  //       case '#': {
  //         console.log()
  //         return document.getElementById(element.slice(1));
  //         break
  //       }
  //       default: {
  //         return document.querySelector(element);
  //         break
  //       }
  //     }
  //   }
  //   const el: HTMLElement = getElement();
  //   if ( el !== null ) {
  //     const y = el.getBoundingClientRect().y;
  //     window.scrollTo( 0 , 10 );
  //     console.log(y);
  //   } else {
  //     console.error('no element has been founded!');
  //   }
  // }
}
