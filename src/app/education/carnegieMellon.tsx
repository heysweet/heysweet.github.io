import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...carnegieMellon} />)
};

export const carnegieMellon = {
    id: 'cmu',
    name: 'Carnegie Mellon University',
    title: 'Bachelor of Computer Science and Art',

    startDate: new Date('2011-09-01'),
    endDate: new Date('2015-09-01'),

    description: `
    Sample of Advanced Coursework:
    - Interactive Art and Computational Design
    - Great Theoretical Ideas of Computer Science
    - Electronic Media Studio II
    - Game Engine Programming
    - Experimental Animation
    - Integration, Differential Equations, and Approximation
    - Experimental Game Design
`.trim(),

    iconSrc: '/cmu.png',
    preview: <Preview />,
    href: '/education#cmu'
} satisfies Experience;