import { Injectable } from '@angular/core';
import { project } from '../pages/projects-page/project.type';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  projectsArr: project[] = [
    {
      title: 'news app',
      aboutShort: 'a simple news app that fetch data from api and let you save your prefrences.',
      aboutFull: 'a simple news app that fetch data from api and let you save your prefrences.',
      imageUrl: './../../assets/screens/news-app.png',
      githubLink: 'https://github.com/amir4rab/newsAppPro',
      liveDemoLink: 'https://news.amir4rab.com/',
      technologies: [
        {
          name: 'angular',
          imageUrl: './../../assets/logos/compressed/angularLogoWhite.svg'
        },
        {
          name: 'typescript',
          imageUrl: './../../assets/logos/compressed/tsLogoWhite.svg'
        },
        {
          name: 'javascript',
          imageUrl: './../../assets/logos/compressed/jsLogoWhite.svg'
        }
      ]
    },
    {
      title: 'news app 2',
      aboutShort: 'a simple news app that fetch data from api and let you save your prefrences.',
      aboutFull: 'a simple news app that fetch data from api and let you save your prefrences.',
      imageUrl: './../../assets/screens/news-app.png',
      githubLink: 'https://github.com/amir4rab/newsAppPro',
      liveDemoLink: 'https://news.amir4rab.com/',
      technologies: [
        {
          name: 'angular',
          imageUrl: './../../assets/logos/compressed/angularLogoWhite.svg'
        },
        {
          name: 'typescript',
          imageUrl: './../../assets/logos/compressed/tsLogoWhite.svg'
        },
        {
          name: 'javascript',
          imageUrl: './../../assets/logos/compressed/jsLogoWhite.svg'
        }
      ]
    },
    {
      title: 'news app 3',
      aboutShort: 'a simple news app that fetch data from api and let you save your prefrences.',
      aboutFull: 'a simple news app that fetch data from api and let you save your prefrences.',
      imageUrl: './../../assets/screens/news-app.png',
      githubLink: 'https://github.com/amir4rab/newsAppPro',
      liveDemoLink: 'https://news.amir4rab.com/',
      technologies: [
        {
          name: 'angular',
          imageUrl: './../../assets/logos/compressed/angularLogoWhite.svg'
        },
        {
          name: 'typescript',
          imageUrl: './../../assets/logos/compressed/tsLogoWhite.svg'
        },
        {
          name: 'javascript',
          imageUrl: './../../assets/logos/compressed/jsLogoWhite.svg'
        }
      ]
    },
    {
      title: 'news app 4',
      aboutShort: 'a simple news app that fetch data from api and let you save your prefrences.',
      aboutFull: 'a simple news app that fetch data from api and let you save your prefrences.',
      imageUrl: './../../assets/screens/news-app.png',
      githubLink: 'https://github.com/amir4rab/newsAppPro',
      liveDemoLink: 'https://news.amir4rab.com/',
      technologies: [
        {
          name: 'angular',
          imageUrl: './../../assets/logos/compressed/angularLogoWhite.svg'
        },
        {
          name: 'typescript',
          imageUrl: './../../assets/logos/compressed/tsLogoWhite.svg'
        },
        {
          name: 'javascript',
          imageUrl: './../../assets/logos/compressed/jsLogoWhite.svg'
        }
      ]
    },
  ] 
  constructor() { }
}
