import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { project } from '../pages/projects-page/project.type';
import { LangData } from './LangData.type';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  observerReobserv: Subject<boolean> = new Subject;
  langData: LangData;
  reobserv(){
    this.observerReobserv.next(true);
  }
  constructor() { }
}
