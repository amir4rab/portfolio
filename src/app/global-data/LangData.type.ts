export type LangData = {
    'home' : homeLangData ,
    'projects' : projectsLangData ,
    'about': aboutLangData ,
    'contact': contactLangData
}
export type homeLangData = {
    title: string,
    myProjects: string,
    aboutMe: string,
}
export type projectsLangData = {
    about: string,
    technologies: string,
    codeBtn: string,
    demoBtn: string
}
export type aboutLangData = {
    education: string,
    educationText: string,
    
    languageSkills: string,
    languageSkillsText: string[],
    
    otherSkills: string,
    otherSkillsText: string,
    
    programingSkills: string,
    
    programingSkillsAdvance: string,
    programingSkillsIntermediate: string,
    programingSkillsBeginner: string,
} 
export type contactLangData = {
    contactMe: string,
    myPages: string,

    emailBtn: string,
}