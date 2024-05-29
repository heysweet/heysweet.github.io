import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...carnegieMellon} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const carnegieMellon = {
    name: 'Carnegie Mellon University',
    title: 'Student',

    startDate: new Date('2011-09-01'),
    endDate: new Date('2015-09-01'),

    description: `
    Bachelors of Computer Science and Art

    Sample of Advanced Coursework:
    - Interactive Art and Computational Design
    - Great Theoretical Ideas of Computer Science
    - Electronic Media Studio II
    - Game Engine Programming
    - Experimental Animation
    - Integration, Differential Equations, and Approximation
    - Experimental Game Design
`.trim(),

    externalWebsite: 'https://jobs.nike.com/internships',
    iconSrc: '/tartan.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#cmu'
} satisfies Experience;