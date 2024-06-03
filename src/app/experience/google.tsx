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

    description: <div className='space-y-4'>
    <div>
    JavaScript, Java, Protocol Buffers, Accessibility, Internationalization, A/B Testing, and Experimentation.
    </div>

    <div>
    - Ran dozens of cross-platform experiments and A/B tests to improve KPIs like revenue, clickthrough/conversion rates, and user engagement.
    <br />
    - Acted as Accessibility Lead for the Shopping team, ensuring compliance with WCAG 2.1 AA standards.
    <br />
    - Collaborated with designers to prototype experimental shopping experiences.
    <br />
    - Contributed to feature development of in-house templating language JSLite.
    </div>
    <div><a href="https://www.google.com/search?tbm=shop&hl=en&psb=1&q=shoes" target='_blank'>Google Shopping</a></div>
    </div>,

    iconSrc: '/google.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#google-shopping'
} satisfies Experience;