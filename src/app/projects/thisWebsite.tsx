import { Resume } from "../experience/resume";
import { Project } from "./types";

const Preview: React.FC = () => {
    return (<Resume {...thisWebsite} />)
};

export const thisWebsite = {
    id: 'this-website',
    name: "andrewmsweet.com",
    title: "The Website You're On Now!",
    iconSrc: '/github.png',

    heroImageSrc: '/thissite.png',

    startDate: null,
    endDate: null,
    description: <div className="space-y-4">
    <div>React, TypeScript, NextJS, Tailwind CSS, and GitHub Actions for CI/CD</div>
    <div>
    The website you are on is my personal portfolio site.
    It is designed to be easy to maintain and update, with a focus on
    performance and accessibility, and meant to showcase my work and projects.
    </div>
    <div>
    I challenged myself to build and polish it as a 1-bit (2 colors) experience, though
    you may notice a few more colors for polish, like a chromatic aberration effect
    on hover, or use of opacity to achieve the scanline and flicker effects.
    </div>
    <div><a href="https://github.com/heysweet/heysweet.github.io">View on GitHub</a></div>
    </div>,
    href: "/projects#this-website",
    preview: <Preview />,
} satisfies Project;