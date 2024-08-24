import { Experience } from '@/types/PagePreview';
import { Resume } from '../experience/resume';

const Preview: React.FC = () => {
    return (<Resume {...pixelInMotion} />)
};

export const pixelInMotion = {
    id: 'pixel-in-motion',
    name: 'A Pixel In Motion',
    title: 'Experimental Animation',
    iconSrc: '/horse.png',

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
        The technique was to first take a mean of the pixels into a 32x24
        grid, followed by quantizing the colors into eight shades of gray.
        </div>
        <div>
        I then designed software which would diff frames to identify which
        cells needed to be painted, and which cells needed to be left alone.
        </div>
        <div>
        Made in collaboration with Sylvia Kosowski.
        </div>
        <div>
        <a href='https://www.youtube.com/watch?v=rq7mOi6WXUA' target='_blank'>
            Watch Making of Video
        </a>
        <br />
        </div>
    </div>,

    preview: <Preview />,
    href: '/education#pixel-in-motion'
} satisfies Experience;