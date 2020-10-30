import { Component, Input, OnInit } from '@angular/core';
import { project } from '../project.type';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() pData: project;
  constructor() { }

  ngOnInit(): void {
    console.log(this.pData);
  }

}
