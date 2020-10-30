import { NgModule } from "@angular/core";
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { HomeSliderComponent } from './home-page/home-slider/home-slider.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HomePageComponent,
        AboutPageComponent,
        ContactPageComponent,
        ProjectsPageComponent,
        HomeSliderComponent,
    ],
    imports: [
        CommonModule
    ],
    exports:[
        HomePageComponent,
        AboutPageComponent,
        ContactPageComponent,
        ProjectsPageComponent,
        HomeSliderComponent,
    ]
})
export class PagesModule{  }