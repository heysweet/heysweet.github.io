import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...walkingDead} />)
};

export const walkingDead = {
    id: 'walking-dead',
    name: 'Walking Dead Transmedia Narrative Analysis',
    title: 'Video Essay',
    iconSrc: '/youtube.png',

    startDate: null,
    endDate: null,

    description: <div className='space-y-4'>
        <div>
        This video essay was created for my Narrative course, in which we were supposed
        to create a presentation analyzing some narrative structure or topic of our
        choice. Being interested in narrative across mediums, and being a huge fan of
        the stories of the Walking Dead comic and videogame world, I decided to analyze
        how I feel The Walking Dead was able to successfully translate its original form
        to both the television and videogame formats.
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=lsC2RhXNWbQ' target='_blank'>
                Watch Video Essay
            </a>
        </div>
    </div>,

    preview: <Preview />,
    href: '/education#walking-dead'
} satisfies Experience;