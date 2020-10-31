import { Component, Input, OnInit } from '@angular/core';
import { project } from './project.type';
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  @Input() projectsArr: project[] = [];
  sliderTransform: string = "translateX(0vw)";
  activeIndex: number = 0;
  constructor() { 
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sliderTransform="translateX(-50vw)";
    // }, 1000);
  }

  scrollTo(index: number){
    if ( this.projectsArr.length < index + 1 || index < 0 ) return;
    this.sliderTransform=`translateX(-${ index * 100 }vw)`;
    this.activeIndex = index;
  }
}
