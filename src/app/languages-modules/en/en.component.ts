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
      aboutShort: 'a simple news app that fetch data from api and let you save your preferences.',
      aboutFull: 'a simple news app that fetch data from api and let you save your preferences.',
      imagePngUrl: './../../assets/screens/news-app.png',
      imageWebpUrl: './../../assets/screens/news-app.webp',
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
          name: 'firebase',
          imageUrl: './../../assets/logos/compressed/firebaseLogoWhite.svg'
        }
      ]
    },
    {
      title: 'Crypto',
      aboutShort: 'a simple Crypto app that shows the latest cryptocurrencies prices.',
      aboutFull: 'a simple Crypto app that shows the latest cryptocurrencies prices.',
      imagePngUrl: './../../assets/screens/crypto-app.png',
      imageWebpUrl: './../../assets/screens/crypto-app.webp',
      githubLink: 'https://github.com/amir4rab/newsAppPro',
      liveDemoLink: 'https://crypto.amir4rab.com/',
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
          name: 'chart.js',
          imageUrl: './../../assets/logos/compressed/chartJsLogoWhite.svg'
        }
      ]
    },
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
        education: 'Education',
        educationText: 'Bachelor degree in computer engineering from iau.',

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
        contactMe: 'Contact me',
        myPages: 'My pages',

        emailBtn: 'Email',
    }
  }
  constructor(private globalDS: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDS.reobserv();
    this.globalDS.langData = this.langData;
  }

}
