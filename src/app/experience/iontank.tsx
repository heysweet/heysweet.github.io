import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...iontank} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const iontank = {
    id: 'iontank',
    name: 'Iontank',
    title: 'Creative Technologist',

    startDate: new Date('2016-10-01'),
    endDate: new Date('2017-12-01'),

    description: <>
    <div className='mb-4'>
    JavaScript, Python, OpenFrameworks, C++, RabbitMQ, and EAGLE for PCB designs.
    </div>

    <div>
    - Developed full stack solution for <a href="/projects#drumbar">a 5-story cylindrical LED screen</a> and controls system at the Rivers Casino Pittsburgh.
    </div>
    <div>
    - Devised automated CI and testing pipeline for remote installations.
    </div>
    <div>
    - Implemented remote project tracking and an up-to-the-minute notification system for permanent on-site installations.
    </div>
    <div>
    - Designed an interactive 3D LED grid firework simulation for a temporary installation for OREO.
    </div>
    </>,

    externalWebsite: 'https://iontank.com/',
    iconSrc: '/iontank.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#iontank',
} satisfies Experience;