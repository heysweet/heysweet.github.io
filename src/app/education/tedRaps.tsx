import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...tedRaps} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const tedRaps = {
    id: 'ted-raps',
    name: 'tedRaps',
    title: 'Interactive Art and Computational Design Project',

    startDate: null,
    endDate: null,

    description: <div>
        This computer assisted query/video splicing engine takes gigabytes of TEDTalks and transforms them into rhyming, beat-matched songs, or TEDRaps. Made in collaboration with Emily Danchik.
        <div>
            <a href='https://www.youtube.com/watch?v=zPJrWseuB5s' target='_blank'>
                [Video]
            </a>
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#ted-raps'
} satisfies Experience;