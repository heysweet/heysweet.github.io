import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...pixelInMotion} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const pixelInMotion = {
    id: 'pixel-in-motion',
    name: 'A Pixel In Motion',
    title: 'Experimental Animation',
    iconSrc: '/ted.png',

    startDate: null,
    endDate: null,

    heroImageSrc: '/pixel_in_motion.gif',
    tintImage: true,

    description: <div className='space-y-4'>
        <div>
        Bridging the digital and the physical, past and future, a series of
        digital images of the first animation ever captured on film was
        algorithmically quantized and pixelated, and then hand-painted
        in a stop-motion-capture of the 3D-printed material of tomorrow.
        </div>
        <div>
        The technique was two first algorithmically quantize the colors
        into 8 shades of gray, and then into a 32x24 grid of pixels.
        </div>
        <div>
        I then designed software which would diff frames to identify which
        cells needed to be painted, and which cells needed to be left alone.
        </div>
        <div>
        Made in collaboration with Sylvia Kosowski.
        </div>
        <div>
        - <a href='https://www.youtube.com/watch?v=rq7mOi6WXUA' target='_blank'>
            [Making Of]
        </a>
        <br />
        - <a href='https://imgur.com/gallery/pixel-motion-2dy9jT4' target='_blank'>
            [GIF on imgur]
        </a>
        <br />
        - <a href='https://www.youtube.com/watch?v=4nw7kjSefPY' target='_blank'>
            [Video]
        </a>
        </div>
    </div>,

    preview: <Preview />,
    page: <Page />,
    href: '/education#pixel-in-motion'
} satisfies Experience;