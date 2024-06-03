import Image from 'next/image'
import Marquee from 'react-fast-marquee';

const marqueeTitles = [
  'Stack',
  'Sr. Software Engineer',
  'Creative Technologist',
  'Xoogler',
  'Accessibility Team Lead @ Google',
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
  'GraphQL',
  'Docker',
  'Objective-C',
  'Java',
  'HTML/CSS/',
];

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <span className='flex-0'>
            <Image
                className='skip-chroma animate-img-load'
                src="/256.png"
                alt="Picture of Andrew Sweet"
                priority 
                height={256}
                width={256} />
        </span>
        <span className='ml-4 flex-1'>
          <h1 className='text-5xl whitespace-nowrap'>Andrew Sweet</h1>
          <div className='text-2xl mt-2'>
              <div className='space-x-2 mb-4'>
                <a href='https://www.linkedin.com/in/andrewmsweet/' target='_blank'>LinkedIn</a>
                <a href='https://github.com/heysweet' target='_blank'>GitHub</a>
                <a href="mailto:andrewmsweet.website@gmail.com" target='_blank'>
                  <span className='sr-only'>Write an </span>Email
                </a>
              </div>
              <div className='h-16 overflow-hidden animate-fade-in'>
                <Marquee gradient gradientColor='#1b1233' gradientWidth={100} speed={20}>
                  {marqueeTitles.join('  |  ') + ' '}
                </Marquee>
                <Marquee gradient gradientColor='#1b1233' gradientWidth={100} speed={35}>
                  {technologies.join('  |  ') + ' '}
                </Marquee>
              </div>
              <div className='text-green my-4 space-y-2'>
                <div>
                I enjoy solving hard technical problems, and I have a passion
                for creating polished, accessible, and performant user
                experiences.
                
                I have a degree
                in <a href='/education#cmu'>Computer Science and Art from Carnegie Mellon University</a>,
                and am always looking to solve creative technical challenges.
                
                I have a strong background in web apps and
                full-stack development, and even had the opportunity to build
                a <a target='_blank' href='https://iontank.com/projects/drumbar'>5-story cylindrical TV screen</a>.
                </div>
                <div>
                I am currently working as a Senior Software Engineer
                at <a href='/experience#dbt-labs'>dbt Labs</a>, where I
                turned a hackathon win into a flagship product: <a target='_blank' href="https://www.getdbt.com/blog/proactively-improve-your-dbt-projects-with-new-dbt-explorer-features">dbt Explorer</a>.
                
                Formerly, I worked
                at companies like <a href='/experience#google-shopping'>Google</a>,
                {' '}<a href='/experience#nike'>Nike</a>, and
                {' '}<a href='/experience#iontank'>Iontank</a>.
                </div>
                <div>
                In my free time, I enjoy making videogames -- most recently having created
                {' '}<a href='https://itch.io/jam/miz-jam-1/rate/738711' className='whitespace-break-spaces' target='_blank'>Bridge: The Card Game: The Video Game</a> for a game jam (
                  <a href="https://www.youtube.com/watch?v=lj866DtYVlo" target='_blank'>Dev Vlog</a>).
                </div>
              </div>
          </div>
        </span>
      </div>
    </>
  );
}