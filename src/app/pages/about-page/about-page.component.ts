import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { aboutLangData } from 'src/app/global-data/LangData.type';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  langData: aboutLangData;
  constructor( private globalDS: GlobalDataService ) { }

  ngOnInit(): void {
    this.langData = this.globalDS.langData.about;
  }
}
