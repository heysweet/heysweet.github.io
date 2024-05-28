import { PagePreview } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume 
        jobTitle={'Software Engineer III'}
        startDate={new Date('2017-12-01')}
        endDate={new Date('2021-02-28')}
        externalWebsite={null}
        description={`
        - Lead the development of cross-platform shopping experiences for Google Shopping.
        - Contributed to feature development of in-house templating language.
        - Ran dozens of experiments and A/B tests to improve KPIs like revenue, conversion rates, and user engagement.
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
    externalWebsite: 'https://www.getdbt.com/',
    iconSrc: '/google.png',
    preview: <Preview />,
    page: <Page />,
    href: '/career#google'
}