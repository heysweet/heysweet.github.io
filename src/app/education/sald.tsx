import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...sald} />)
};

export const sald = {
    id: 'sald',
    name: 'Studio A Ludum Dare (SALD) Game Engine',
    title: 'Game Engine Programming',
    iconSrc: '/crosshair.png',

    startDate: null,
    endDate: null,

    heroImageSrc: '/collision.gif',
    tintImage: true,

    description: <div className='space-y-4'>
        <div>
        My senior year, I enrolled in Game Engine Programming at Carnegie Mellon.
        In this course, the class collaboratively built features into the SALD
        Engine as the semester progressed.
        </div>
        <div>
        The goals of the game engine were to be to have a small footprint, 
        be easy to use, and most importantly was purpose-designed for the
        use in game jams like Ludum Dare, where it{"'"}s important to upload the full
        source code and assets embedded in the HTML to avoid worrying about
        additional hosting concerns.
        </div>
        <div>
        I was the most active contributor, using the engine itself for my own
        project at the same time, 5 Days Left for my Experimental Animation course.
        </div>
        <div>
        The core features of the game engine include sprite and tilemap rendering,
        collision checking, keyboard and mouse input, music and sound effect 
        queueing, storing images and other game files through static data urls,
        and more.
        </div>
        <div>
        - <a href='https://sald-devs.github.io/sald/' target='_blank'>
            SALD Docs
        </a>
        <br />
        - <a href='https://github.com/ixchow/sald' target='_blank'>
            SALD on GitHub
        </a>
        <br />
        </div>
    </div>,

    preview: <Preview />,
    href: '/education#sald'
} satisfies Experience;