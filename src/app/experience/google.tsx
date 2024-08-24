import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...google} />)
};

export const google = {
    id: 'google-shopping',
    name: 'Google Shopping',
    title: 'Software Engineer III',

    startDate: new Date('2017-12-01'),
    endDate: new Date('2021-02-28'),

    description: <div className='space-y-4'>
    <div>
    JavaScript, Java, Protocol Buffers, Accessibility, Internationalization, A/B Testing, and Analyzing Experiment Data for KPI targets
    </div>

    <div>
    Designed, implemented, experimented, and launched features on google.com Shopping tab: on
    monetization team launched ad units that are now main revenue source on the shopping tab,
    assisted in transition to Free for Merchants Search Results Page main results block, provided
    support, advice, and code reviews for Early Online Deals owned SRP transition and implemented
    corresponding logging, metrics, and performed custom analysis that were critical for launch
    justifications.
    </div>
    <div>
    Shopping Property Accessibility Eng Lead. Intern host for 2019 and (virtually) 2020 as well
    as interviewed candidates and TA{"'"}d for 3 week Computer Science Summer Institute.
    </div>
    <div><a href="https://www.google.com/search?tbm=shop&hl=en&psb=1&q=shoes" target='_blank'>Google Shopping</a></div>
    </div>,

    iconSrc: '/google.png',
    preview: <Preview />,
    href: '/experience#google-shopping'
} satisfies Experience;