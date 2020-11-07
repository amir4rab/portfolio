import { Component, OnInit } from '@angular/core';
import { LangData } from 'src/app/global-data/LangData.type';
import { project } from 'src/app/pages/projects-page/project.type';
import { GlobalDataService } from '../../global-data/global-data.service'


@Component({
  selector: 'app-en',
  templateUrl: './en.component.html',
  styleUrls: ['./en.component.scss']
})
export class EnComponent implements OnInit {
  pArr: project[] = [
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
        },
        {
          name: 'firebase',
          imageUrl: './../../assets/logos/compressed/jsLogoWhite.svg'
        },
        {
          name: 'web',
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
    }
  ]
  langData: LangData = {
    'home' : {
        title: '👋 Hi, I am Amir Arab a front-end developer',
        myProjects:'My projects',
        aboutMe: 'About me',
    } ,
    'projects' : {
        about: 'About',
        technologies: 'Technologies',
        codeBtn: 'Code',
        demoBtn: 'Demo'
    } ,
    'about': {
        education: 'education',
        educationText: 'bachelor degree in computer engineering from iau.',

        languageSkills: 'Language skills',
        languageSkillsText: [
          'German: A1.1',
          'English: fluent',
          'Persian( Farsi ): Native'
        ],

        otherSkills: 'Other skills',
        otherSkillsText: 'Semi knowledge of Figma, Adobe photoshop and Adobe premiere pro.',

        programingSkills: 'Programing skills',

        programingSkillsAdvance: 'Advance',
        programingSkillsIntermediate: 'Intermediate',
        programingSkillsBeginner: 'Beginner',
    } ,
    'contact': {
        contactMe: 'contactMe',
        myPages: 'My pages',

        emailBtn: 'email',
    }
  }
  constructor(private globalDS: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDS.reobserv();
    this.globalDS.langData = this.langData;
  }

}
