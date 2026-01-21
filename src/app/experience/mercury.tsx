import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...mercury} />)
};

export const mercury = {
    id: 'mercury',
    name: 'Mercury',
    title: 'Senior Software Engineer',

    startDate: new Date('2026-02-02'),
    endDate: null, // Still work here

    description: <div className='space-y-4'>
    <div>
    Haskell, TypeScript, React.
    </div>
    <div>
    Credit Team
    </div>
    <div>
        <a href="https://www.mercury.com/" target='_blank'>
            mercury.com
        </a>
    </div>
    </div>,

    heroImageSrc: undefined,
    iconSrc: '/mercury.png',
    preview: <Preview />,
    href: '/experience#mercury'
} satisfies Experience;
