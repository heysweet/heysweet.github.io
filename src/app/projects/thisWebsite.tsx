import { Resume } from "../experience/resume";
import { Project } from "./types";

const Preview: React.FC = () => {
    return (<Resume {...thisWebsite} />)
};

export const thisWebsite = {
    id: 'this-website',
    name: "andrewmsweet.com",
    title: "This Website",
    iconSrc: '/github.png',
    startDate: null,
    endDate: null,
    description: <>
    This website is a portfolio and blog site that I built using React, TypeScript, NextJS, and Tailwind CSS.
    It is hosted on GitHub Pages and uses GitHub Actions for CI/CD.
    The site is designed to be easy to maintain and update, with a focus on performance and accessibility, and meant to showcase my work and projects.
    <div>- <a href="https://github.com/heysweet/heysweet.github.io">View on GitHub</a></div>
    </>,
    href: "/projects#this-website",
    preview: <Preview />,
} satisfies Project;