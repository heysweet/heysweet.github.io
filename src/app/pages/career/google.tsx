import { PagePreview } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume 
        jobTitle={'Software Engineer III'}
        startDate={new Date('2017-12-01')}
        endDate={new Date('2021-02-28')}
        externalWebsite={null}
        description={`
        - Ran dozens of cross-platform experiments and A/B tests to improve KPIs like revenue, conversion rates, and user engagement.
        - Contributed to feature development of in-house templating language.
        - Collaborated with designers to prototype experimental shopping experiences.
        `.trim()}
    />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const Google: PagePreview = {
    title: 'Google Shopping',
    externalWebsite: 'https://shopping.google.com/',
    iconSrc: '/google.png',
    preview: <Preview />,
    page: <Page />,
    href: '/career#google'
}