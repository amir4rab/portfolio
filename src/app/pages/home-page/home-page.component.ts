import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showSlider: boolean = false;
  constructor() { }

  ngOnInit(): void {
    
    this.checkForDesktop();
  }

  scrollTo(id: string): void{
    if ( document.getElementById(id) ) {
      document.getElementById(id).scrollIntoView();
    }
  }

  checkForDesktop(): void{
    if ( 1200 < window.innerWidth ) {
      this.showSlider = true
    }
  }
}
