export type project = {
    title: string,
    aboutShort: string,
    aboutFull: string | null,
    imageUrl: string,
    githubLink: string,
    liveDemoLink: string,
    technologies: { name : string , imageUrl : string }[],
}