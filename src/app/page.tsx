import Image from 'next/image'
import Marquee from 'react-fast-marquee';
import { startedAtWarp } from './experience/warp';

/**
 * A quirk of the Marquee is that whitespace cannot be
 * retained on the ends of the marquee. Because of this,
 * the first item of this array is split across the first
 * and last item to ensure a consistent visual.
 */
function accessibleMarquee(items: string[]): string {
  const [firstItem, ...remaining] = items;
  const lastItem = remaining.pop();

  const mergedItem = `${lastItem}${firstItem}`;

  return [mergedItem, ...remaining].join(', ');
}

const marqueeTitles = [
  'Stack',
  'Sr. Software Engineer',
  'Creative Technologist',
  'Xoogler',
  'Team Accessibility Lead',
  'Full-',
];

const technologies = [
  'JS',
  'Rust/WASM',
  'd3',
  'python',
  'django',
  'TypeScript',
  'React',
  'Tailwind',
  'openFrameworks/C++',
  'GraphQL',
  'Objective-C',
  'Java',
  'HTML/CSS/',
];

function CurrentWork() {
  const worksAtWarp = startedAtWarp();

  const recentHistory = (<>
    on the core team at {worksAtWarp ? <a href='/experience#warp'>Warp</a> : 'Warp'}, where I will be building out
      the core functionality of the <a href='https://www.warp.dev/' target='_blank'>
        <Image src='/warp.png' className='inline-block mb-1 mr-1' alt='Warp' width={16} height={16} />
        Warp Terminal</a>.

    Most recently, I was a Senior Software Engineer
      at <a href='/experience#dbt-labs'>dbt Labs</a>, where I
      turned my hackathon win into a flagship product: <a target='_blank' href="https://www.getdbt.com/blog/proactively-improve-your-dbt-projects-with-new-dbt-explorer-features">
        <Image src='/dbt.png' className='inline-block mb-1 mr-1' alt='dbt Labs' width={16} height={16} />
        dbt Explorer
      </a>.
    
    Formerly, I worked
    at companies like <a href='/experience#google-shopping'>Google</a>,
    {' '}<a href='/experience#nike'>Nike</a>, and
    {' '}<a href='/experience#iontank'>Iontank</a>.
  </>);

  if (!worksAtWarp) {
    return (
      <div>
      Soon, I will be working as a Software Engineer{' '}
      {recentHistory}
      </div>
    );
  }

  return (
    <div>
    I am currently working as a Software Engineer{' '}
    {recentHistory}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className='md:mx-16 big-screen:my-16'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex-0 flex flex-col md:flex-row'>
          <div className='my-auto flex-0 mr-4'>
            <Image
                className='skip-chroma animate-img-load'
                src="/256.png"
                alt="Picture of Andrew Sweet"
                priority 
                height={256}
                width={256} />
          </div>
          <div className='flex-1 my-auto'>
            <h1 className='text-5xl whitespace-nowrap'>Andrew Sweet <span className='block'>@heysweet</span></h1>
            <div className='text-2xl mt-2'>
              <h2 className='sr-only'>External Links</h2>
              <div className='space-x-2 mb-4'>
                <a href='https://www.linkedin.com/in/andrewmsweet/' target='_blank'>
                  <Image role='presentation' alt='' src='/linkedin.png' className='inline-block mb-1 mr-1' width={16} height={16} />
                  LinkedIn
                  <span className='sr-only'> profile</span>
                </a>
                <a href='https://github.com/heysweet' target='_blank'>
                  <Image role='presentation' alt='' src='/github.png' className='inline-block mb-1 mr-1' width={16} height={16} />
                  GitHub
                  <span className='sr-only'> profile</span>
                </a>
              </div>
              <div className='h-16 overflow-hidden animate-fade-in'>
                <h2 className='sr-only'>Skills and Technology</h2>
                <div className='sr-only'>Titles: {accessibleMarquee(marqueeTitles)}</div>
                <div className='sr-only'>Technologies: {accessibleMarquee(technologies)}</div>
                <div aria-hidden>
                  <Marquee gradient gradientColor='#1b1233' gradientWidth={100} speed={20}>
                    {marqueeTitles.join('  |  ') + ' '}
                  </Marquee>
                  <Marquee gradient gradientColor='#1b1233' gradientWidth={100} speed={35}>
                    {technologies.join('  |  ') + ' '}
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='text-green my-4 space-y-3 text-2xl'>
          <h2 className='sr-only'>About Me</h2>
          <div>
          I am a product-focused software engineer with a passion for
          polished, accessible, and performant user experiences and a full
          stack skillset.
          
          I have a degree
          in <a href='/education#cmu'>Computer Science and Art from Carnegie Mellon University</a>,
          and am always looking to solve creative technical challenges.
          
          I have a strong background in web apps and
          full-stack development, and even had the opportunity to build
          a <a target='_blank' href='https://iontank.com/projects/drumbar' className='whitespace-pre'>
            <Image src='/iontank.png' className='inline-block mb-1 mr-1' alt='Iontank' width={16} height={16} />
            5-story cylindrical TV screen
          </a>.
          </div>
          <CurrentWork />
          <div>
          In my free time, I enjoy making videogames -- most recently having created
          {' '}<a href='https://itch.io/jam/miz-jam-1/rate/738711' className='whitespace-break-spaces' target='_blank'>
            <Image role='presentation' alt='' src='/bridgei.png' className='inline-block mb-1 mr-1' width={16} height={16} />
            Bridge: The Card Game: The Video Game
          </a> for a game jam (
            <a href="https://www.youtube.com/watch?v=lj866DtYVlo" target='_blank'>
              <Image src='/youtube.png' className='inline-block mb-1 mr-1' alt='YouTube' width={16} height={16} />
              Dev Vlog
            </a>).
          </div>
        </div>
      </div>
    </div>
  );
}