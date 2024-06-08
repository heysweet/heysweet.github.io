import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...geekAndSundry} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        Full Page
    </>)
};

export const geekAndSundry = {
    id: 'geek-and-sundry',
    name: 'Geek & Sundry (Intern)',
    title: 'Video Editor and iOS App Developer',

    startDate: new Date('2012-07-01'),
    endDate: new Date('2012-12-30'),

    description: <div className='space-y-4'>
    <div>
    Python, Objective-C, Firebase, and YouTube API.
    </div>

    <div>
    During the summer after my sophomore year of college, I interned at Geek & Sundry,
    a digital media company that produces nerdy YouTube videos. I was hired to edit videos,
    a skill which I had developed through middle school and high school.
    </div>
    <div>
    After two weeks of video editing, I knew I wanted to be writing code. I asked around
    the office what problems they were working on. One video editor was working on aggregating
    view counts on a per playlist level, something that was not directly offered by YouTube
    at the time. I went home that weekend and threw together a python script which used the
    YouTube API to aggregate the metrics he was interested in.
    </div>
    <div>
    Another person was working on cataloging all of the videos they had stored on a number
    of physical external hard drives. Again, I wrote a python script which would crawl each
    of these hard drives as you plugged them in, and allowed you to search for individual
    files by name or metadata.
    </div>
    <div>
    Emboldened by these successes, I asked the owner of the company if I could develop an app
    for them. I spent the rest of the summer developing an iOS app which would allow users to
    meet-up at local nerdy events. The app was never released, but I learned a lot about
    Objective-C and iOS development.
    </div>
    <div>
    Before commiting fully to app development, I edited extended interviews with
    drummer <a href="https://www.youtube.com/watch?v=9bC1WoHn1zU" target='_blank'>Jason Finn</a>,
    NASA JPL{"'"}s <a href="https://www.youtube.com/watch?v=sjZhQmdhv8w" target='_blank'>Bobak Ferdowsi</a>,
    and author <a href="https://www.youtube.com/watch?v=1ofRqDQGIKo" target='_blank'>John Scalzi</a>
    </div>
    
    <div><a href="https://www.youtube.com/@GeekandSundry/videos" target='_blank'>Geek & Sundry YouTube Channel</a></div>
    </div>,

    iconSrc: '/geek_and_sundry.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#geek-and-sundry'
} satisfies Experience;