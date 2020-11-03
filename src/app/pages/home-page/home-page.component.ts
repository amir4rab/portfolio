import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { homeLangData } from 'src/app/global-data/LangData.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showSlider: boolean = false;
  langData: homeLangData;
  constructor( private globalDS: GlobalDataService ) { }

  ngOnInit(): void {
    this.langData = this.globalDS.langData.home;
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
