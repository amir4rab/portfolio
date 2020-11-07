import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { homeLangData } from 'src/app/global-data/LangData.type';
import { ScrollToService } from 'src/app/utilities/scroll-to.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  showSlider: boolean = false;
  langData: homeLangData;
  constructor( private globalDS: GlobalDataService, private scrollToService: ScrollToService  ) { }

  ngOnInit(): void {
    this.langData = this.globalDS.langData.home;
    this.checkForDesktop();
  }

  checkForDesktop(): void{
    if ( 1200 < window.innerWidth ) {
      this.showSlider = true
    }
  }
  scrollToEl(el: string){
    this.scrollToService.fn(el);
  }
}
