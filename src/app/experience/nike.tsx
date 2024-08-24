import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...nike} />)
};

export const nike = {
    id: 'nike',
    name: 'Nike',
    title: 'Software Engineer',

    startDate: new Date('2015-07-01'),
    endDate: new Date('2016-07-31'),

    description: <div className='space-y-4'>
    <div>
    JavaScript, Objective-C, Swift, Java (Android), and Node.js.
    </div>

    <div>
    - Developed JavaScript web app, iOS SDK, Android SDK, node.js validation service, and supported legacy Java services for Universal Login & Registration (UNITE) platform
    <br />
    - Developed Automated Build & Test framework with Continuous Delivery to production with high availability
    <br />
    - Took active leadership role in decision making within iOS app development
    <br />
    - Built app-to-web url authentication, web session management with keychain, and login continuity support for native and web experiences
    <br />
    - Followed Test Driven Development and other agile practices within a certified scrum team
    </div>
    <div><a href="https://nike.com/" target='_blank'>nike.com</a></div>
    </div>,

    iconSrc: '/nike.png',
    preview: <Preview />,
    href: '/experience#nike'
} satisfies Experience;