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
    iconSrc: '/ted.png',

    startDate: null,
    endDate: null,

    description: <div className='space-y-4'>
        <div>
        First, scrape gigabytes of TEDTalks. Then, analyze the audio transcripts
        using the natural language toolkit (NLTK) to count syllables and find
        rhymes. Finally, prompt the user for some search terms to seed a rap.
        The program then spits out timestamps from different TEDTalks, and
        spits out short clips of TEDTalks which contain the matching voice lines.
        </div>
        <div>
        The remainder of the process is manual, as perfectly timing, editing, and
        time-stretching the video clips to fit to a beat is not easily automated.
        But the result is a rap that is as inspirational as the average TEDTalk.
        </div>
        <div>
            <a href='https://www.youtube.com/watch?v=zPJrWseuB5s' target='_blank'>
                Video
            </a>
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#ted-raps'
} satisfies Experience;