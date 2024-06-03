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
    id: 'google-shopping',
    name: 'Google Shopping',
    title: 'Software Engineer III',

    startDate: new Date('2017-12-01'),
    endDate: new Date('2021-02-28'),

    description: <>
    <div className='mb-4'>
    JavaScript, Java, Protocol Buffers, Accessibility, Internationalization, A/B Testing, and Experimentation.
    </div>

    <div>
    - Ran dozens of cross-platform experiments and A/B tests to improve KPIs like revenue, clickthrough/conversion rates, and user engagement.
    </div>
    <div>
    - Acted as Accessibility Lead for the Shopping team, ensuring compliance with WCAG 2.1 AA standards.
    </div>
    <div>
    - Collaborated with designers to prototype experimental shopping experiences.
    </div>
    <div>
    - Contributed to feature development of in-house templating language.
    </div>
    </>,

    externalWebsite: 'https://www.google.com/search?tbm=shop&hl=en&psb=1&q=shoes',
    iconSrc: '/google.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#google-shopping'
} satisfies Experience;