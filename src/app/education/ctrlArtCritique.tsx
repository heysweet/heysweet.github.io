import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...ctrlArtCritique} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const ctrlArtCritique = {
    name: 'ctrl+art+critique',
    title: 'Capstone Project',

    startDate: null,
    endDate: null,

    description: <div>
        <div>Let&apos;s Play Art YouTube video series asks art students play a videogame and analyze it through the lens of art criticism.</div>
        <div>
            - <a href='https://www.youtube.com/watch?v=sSkAYI8f5W8' target='_blank'>
                Let&apos;s Play Art - Fez
            </a>
        </div>
        <div>
            - <a href='https://www.youtube.com/watch?v=093lQQxFEq8' target='_blank'>
                Let&apos;s Play Art - Amnesia
            </a>
        </div>
        <div>
            - <a href='https://www.youtube.com/watch?v=2qZKj7M6yhQ' target='_blank'>
                Let&apos;s Play Art - Mass Effect 3
            </a>
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#cmu'
} satisfies Experience;