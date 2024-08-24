import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...warp} />)
};

export const warp = {
    id: 'warp',
    name: 'Warp',
    title: 'Software Engineer',

    startDate: new Date('2024-09-30'),
    endDate: null, // Still work here

    description: <div className='space-y-4'>
    <div>
    Rust, Golang.
    </div>
    <div>
    - Collaborate closely with the rest of engineering, as well as other stakeholders from our growth, marketing, and product teams, to plan features and build a high quality product that elevates the productivity of all developers
    <br />
    - Prototype ideas and concepts to get quick feedback from internal and external users
    <br />
    - Work across the entire technical stack on all aspects of the user experience, to ensure users have the most efficient and delightful experience using Warp.
    </div>
    <div>
        <a href="https://www.warp.dev/" target='_blank'>
            warp.dev
        </a>
    </div>
    </div>,

    heroImageSrc: undefined,
    iconSrc: '/warp.png',
    preview: <Preview />,
    href: '/experience#warp'
} satisfies Experience;

export function startedAtWarp(): boolean {
  const now = new Date();
  return now >= warp.startDate;
}