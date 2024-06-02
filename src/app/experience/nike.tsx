import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...nike} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const nike = {
    name: 'Nike',
    title: 'Software Engineer',

    startDate: new Date('2015-07-01'),
    endDate: new Date('2016-07-31'),

    description: `
    JavaScript, Objective-C, Java, and Node.js.

    - Developed JavaScript web app, iOS SDK, Android SDK, node.js validation service, and supported legacy Java code for Universal Login & Registration (UNITE) platform
    - Developed Automated Build & Test framework with Continuous Delivery to production with high availability
    - Supported onboarding integration with our APIs with nike.com
    - Built app-to-web url authentication, web session management, and login continuity support for native and web experiences
    - Followed Test Driven Development and other agile practices within a certified scrum team
    `.trim(),

    externalWebsite: 'https://nike.com/',
    iconSrc: '/nike.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience/nike'
} satisfies Experience;