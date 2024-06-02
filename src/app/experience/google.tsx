import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...google} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const google = {
    name: 'Google Shopping',
    title: 'Software Engineer III',

    startDate: new Date('2017-12-01'),
    endDate: new Date('2021-02-28'),

    description: `
    JavaScript, Java, and Protocol Buffers.

    - Ran dozens of cross-platform experiments and A/B tests to improve KPIs like revenue, clickthrough/conversion rates, and user engagement.
    - Contributed to feature development of in-house templating language.
    - Collaborated with designers to prototype experimental shopping experiences.
    `.trim(),

    externalWebsite: 'https://shopping.google.com/',
    iconSrc: '/google.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience/google'
} satisfies Experience;