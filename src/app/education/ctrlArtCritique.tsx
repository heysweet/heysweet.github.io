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
    id: 'ctrl-art-critique',
    name: 'ctrl+art+critique',
    title: 'Capstone Project',
    iconSrc: '/youtube.png',

    startDate: null,
    endDate: null,

    description: <div>
        <div>
        Let{"'"}s Play Art is a YouTube video series asks art students play a
        videogame and analyze it through the lens of art criticism. Video include
        {' '}<a href='https://www.youtube.com/watch?v=sSkAYI8f5W8' target='_blank'>
            Fez
        </a> and a discussion about auteur theory, and art vs the artist,
        {' '}<a href='https://www.youtube.com/watch?v=093lQQxFEq8' target='_blank'>
            Amnesia
        </a> and a discussion on emotions and art, and
        {' '}<a href='https://www.youtube.com/watch?v=2qZKj7M6yhQ' target='_blank'>
            Mass Effect 3
        </a> and a discussion on the role of the player in the narrative and
        can a AAA studio make art.
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#ctrl-art-critique'
} satisfies Experience;