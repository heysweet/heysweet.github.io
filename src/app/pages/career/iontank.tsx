import { PagePreview } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume 
        jobTitle={'Software Developer'}
        startDate={new Date('2016-10-01')}
        endDate={new Date('2017-12-01')}
        externalWebsite={null}
        description={`
        - Developed full stack for 5-story LED cylindrical display and controls.
        - Devised automated CI and testing pipeline for remote installations.
        - Implemented remote project tracking and an up-to-the-minute notification system.
        `.trim()}
    />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const Iontank: PagePreview = {
    title: 'Iontank',
    externalWebsite: 'https://iontank.com/',
    iconSrc: '/iontank.png',
    preview: <Preview />,
    page: <Page />,
    href: '/career#iontank'
}