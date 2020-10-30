import { Component, Input, OnInit } from '@angular/core';
import { project } from './project.type';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  @Input() projectsArr: project[] = [];
  dotsCount: number = null;
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.projectsArr);
    this.dotsCount = this.projectsArr.length;
  }

}
