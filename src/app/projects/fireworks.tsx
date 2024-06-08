import { Resume } from "../experience/resume";
import { Project } from "./types";


const Preview: React.FC = () => {
    return (<Resume {...fireworks} />)
};

export const fireworks = {
    id: 'fireworks',
    name: '3D LED Grid Fireworks Simulation',
    employer: 'Iontank',
    title: 'Lead Software Developer',
    iconSrc: '/iontank.png',

    heroImageSrc: '/fireworks.png',

    startDate: null,
    endDate: null,
    description: <div className="space-y-4">
    <div>C++, OpenFrameworks, Octrees, 3D grid of LEDs</div>

    <div>
    A 3D grid of LEDs suspended in space light up as a
    3D particle simulation of fireworks collides with them.
    This simulation takes advantage of Octrees to efficiently
    identify which LEDs should be lit up to make a firework effect.
    </div>
    <div>
    Made for a temporary installation.
    </div>
    <div className="mt-4">
        <a href="https://www.youtube.com/watch?v=_JalqOQanLE" target="_blank">See virtual fireworks demo</a>
    </div>
    </div>,
    href: "/projects#fireworks",
    preview: <Preview />,
} satisfies Project;