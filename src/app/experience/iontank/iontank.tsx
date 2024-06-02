import { Experience } from '@/types/PagePreview';
import { Resume } from '../resume';

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
    name: 'Iontank',
    title: 'Creative Technologist',

    startDate: new Date('2016-10-01'),
    endDate: new Date('2017-12-01'),

    heroImageSrc: '/drumbar.png',

    description: `
    JavaScript, Python, RabbitMQ, and Redis.

    - Developed full stack solution for 5-story cylindrical LED screen and controls system at the Rivers Casino Pittsburgh.
    - Devised automated CI and testing pipeline for remote installations.
    - Implemented remote project tracking and an up-to-the-minute notification system.
    `.trim(),

    externalWebsite: 'https://iontank.com/',
    iconSrc: '/iontank.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#iontank',
} satisfies Experience;