import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { contactLangData } from 'src/app/global-data/LangData.type';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  langData: contactLangData;
  constructor( private globalDS: GlobalDataService ) { }

  ngOnInit(): void {
    this.langData = this.globalDS.langData.contact;
  }
}
