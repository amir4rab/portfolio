import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { projectsLangData } from 'src/app/global-data/LangData.type';
import { project } from '../project.type';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() pData: project;
  langData: projectsLangData;
  constructor(private globalDS: GlobalDataService) { }

  ngOnInit(): void {
    this.langData = this.globalDS.langData.projects;
  }

}
