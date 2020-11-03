import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalDataService } from '../global-data/global-data.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  activeLink: string = null;
  setClassActive: boolean = null;

  lastObservedItems :HTMLElement[] = [];
  observer: IntersectionObserver;

  constructor(private globalDS: GlobalDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.iObserver();
    
    this.globalDS.observerReobserv.subscribe( _ => {
      this.getActiveRout();
      if( this.lastObservedItems.length === 0 ) {
        this.observ();
      } else {
        this.rebserv();
      }
    });
  }
  iObserver(){
    const options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px',
      threshold: 0.5
    }

    this.observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach(entry  => {
          if(entry.isIntersecting){
            this.activeLink = entry.target.id;
          }
      })
    },options);
  }

  observ(): void{
    const sectionElments: NodeList = document.querySelectorAll('section');
    for(let el of Array.from(sectionElments)){
      this.lastObservedItems.push(el as HTMLElement);
      this.observer.observe(el as HTMLElement);
    }
  }

  rebserv(): void{
    for(let el of this.lastObservedItems){
      this.observer.unobserve(el);
    }
    this.lastObservedItems = [];
    this.observ();
  }

  getActiveRout(): void{

    // this.activatedRoute.url.subscribe(res=>console.log(res));
    //this.activatedRoute.params.subscribe(res => console.log(res));

  }
  setEnClass(state: boolean): void{

  }
}
