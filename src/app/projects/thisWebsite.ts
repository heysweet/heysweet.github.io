import { Project } from "./types";

export const thisWebsite = {
    name: "This Website",
    title: "Side Project",
    iconSrc: '/github.png',
    startDate: null,
    endDate: null,
    description: `
    This website is a portfolio and blog site that I built using React, TypeScript, NextJS, and Tailwind CSS.
    It is hosted on GitHub Pages and uses GitHub Actions for CI/CD.
    The site is designed to be easy to maintain and update, with a focus on performance and accessibility,
    and meant to showcase my work and projects.
    `.trim(),
    href: "https://github.com/heysweet/heysweet.github.io"
} satisfies Project;