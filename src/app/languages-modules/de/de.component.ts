import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/global-data/global-data.service';
import { LangData } from 'src/app/global-data/LangData.type';
import { project } from 'src/app/pages/projects-page/project.type';

@Component({
  selector: 'app-de',
  templateUrl: './de.component.html',
  styleUrls: ['./de.component.scss']
})
export class DeComponent implements OnInit {
  pArr: project[] = [
    {
      title: 'news app',
      aboutShort: 'Eine einfache Nachrichten-App, mit der Sie Daten von der API abrufen und Ihre Einstellungen speichern können.',
      aboutFull: 'Eine einfache Nachrichten-App, mit der Sie Daten von der API abrufen und Ihre Einstellungen speichern können.',
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
        title: '👋 Halo, Ich bin Amir Arab ein Front-End-Programmierer',
        myProjects:'Meine Projekte',
        aboutMe: 'Über mich',
    } ,
    'projects' : {
        about: 'Über',
        technologies: 'Technologien',
        codeBtn: 'Code',
        demoBtn: 'Demo'
    } ,
    'about': {
        education: 'Bildung',
        educationText: 'Bachelor-Abschluss in Computertechnik von Iau.',

        languageSkills: 'Sprach kenntnisse',
        languageSkillsText: [
          'Deutsch: A1.1',
          'Englicsh: fließend',
          'Persisch: Einheimisch'
        ],

        otherSkills: 'Andere Fähigkeiten',
        otherSkillsText: 'Halbkenntnisse in Figma, Adobe Photoshop und Adobe Premiere Pro.',

        programingSkills: 'Programmier kenntnisse',

        programingSkillsAdvance: 'Fortgeschrittene',
        programingSkillsIntermediate: 'Mittlere',
        programingSkillsBeginner: 'Anfänger',
    } ,
    'contact': {
        contactMe: 'Kontaktiere mich',
        myPages: 'Meine Seiten',

        emailBtn: 'Email',
    }
  }
  constructor(private globalDS: GlobalDataService) { }

  ngOnInit(): void {
    this.globalDS.reobserv();
    this.globalDS.langData = this.langData;
  }
}
