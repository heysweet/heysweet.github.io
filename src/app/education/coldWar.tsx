import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...coldWar} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const coldWar = {
    id: 'cold-war',
    name: 'Cold War (with art assets from Red Alert 2)',
    title: 'Introduction to Programming Final Project',
    iconSrc: '/crosshair.png',

    heroImageSrc: '/coldWar.png',

    startDate: null,
    endDate: null,

    description: <div className='space-y-4'>
        <div>Python, PyGame, A* Pathfinding, Client-Server Architecture</div>
        <div>
        While CMU was full of natural born programmers and freshmen who
        had programmed for over a decade, I was not one of them.

        I came to CMU with a passion to make videogames, but limited experience.

        The end of 15-112 (Fundamentals of Programming) was capped off with
        a final project of our choosing that demonstrated our what we&apos;ve learned.
        </div>
        <div>
        100+ hours of research and development later, Cold War was born.
        </div>
        <div>
        Cold War is a real-time-strategy game made with PyGame in Python,
        making use of advanced algorithms like the A* Pathfinding algorithm
        for optimal unit movement.

        The game is client-server based, with the server handling the game
        state and the client handling the rendering and user input, and
        takes advantage of a rudamentary culling technique to reduce the
        number of sprites rendered to the screen.
        </div>
        <div>
        My project was one of the 14 chosen to present out of a class
        of 230+ students. Art assets are from Westwood&apos;s Red Alert 2.
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=BBQc__m56Y8' target='_blank'>
                [Video]
            </a>
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#cold-war'
} satisfies Experience;