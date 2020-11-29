export type project = {
    title: string,
    aboutShort: string,
    aboutFull: string | null,
    imagePngUrl: string,
    imageWebpUrl: string,
    githubLink: string,
    liveDemoLink: string,
    technologies: { name : string , imageUrl : string }[],
}