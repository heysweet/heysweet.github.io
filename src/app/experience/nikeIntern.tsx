import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...nikeIntern} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const nikeIntern = {
    id: 'nike-intern',
    name: 'Nike (Intern)',
    title: 'Consumer Digital Technology Intern',

    startDate: new Date('2014-06-01'),
    endDate: new Date('2014-08-31'),

    description: <div className='space-y-4'>
    <div>Java, Objective-C (iOS Development)</div>
    <div>
    Consumer Account Management Automation Framework Engineering:
    <br />
    - Optimized existing legacy codebase after analysis of inefficiencies
    <br />
    - Provided back-end services for a number of consumer-facing platforms
    <br />
    - Onboarded new individuals, enabling efficient knowledge transfer
    <br />
    - Delivered software through agile methodology as a part of a scrum team
    </div>
    
    <div>
    Cross Functional Project (Leadership and Design):
    <br />
    - Lead a team of 9 interns through an app development process
    <br />
    - Coordinated with Nike leadership in Events Services, Legal, Internal
    Communications for design and implementation forecasting
    <br />
    - Presented demo in front of a large audience of Nike leadership and peers
    </div>
    <div><a href='https://jobs.nike.com/internships' target='_blank'>Nike Internship Program</a></div>
    </div>,

    externalWebsite: '',
    iconSrc: '/nike.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#nike-intern'
} satisfies Experience;