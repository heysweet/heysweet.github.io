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
    name: 'Nike (Intern)',
    title: 'Consumer Digital Technology Intern',

    startDate: new Date('2014-06-01'),
    endDate: new Date('2014-08-31'),

    description: `
    Consumer Account Management Automation Framework Engineering:
    - Optimized existing legacy codebase after analysis of inefficiencies
    - Provided back-end services for a number of consumer-facing platforms
    - Onboarded new individuals, enabling efficient knowledge transfer
    - Acted within an existing scrum team
    
    Cross Functional Project (Leadership and Design):
    - Lead a team of 9 interns through an app development process
    - Coordinated with Nike leadership in Events Services, Legal, Internal Communications for design, implementation forecasting, maintenance planning, and legal clearance
    - Presented concept in front of a large audience of Nike leadership and peers
    `.trim(),

    externalWebsite: 'https://jobs.nike.com/internships',
    iconSrc: '/nike.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience/nike-intern'
} satisfies Experience;