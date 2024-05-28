import VirtualWindow from '@/components/VirtualWindow';
import Image from 'next/image';
import { relevantExperience } from './pages/experience';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:p-20 mono bg-black text-green">
      <VirtualWindow title='System' className='w-full max-w-6xl' items={[
        { title: 'Experience', shortTitle: 'EXP', options: relevantExperience },
        { title: 'Projects', shortTitle: 'PROJ', options: [/*'test', 'test2'*/] },
        { title: 'Languages', shortTitle: 'LANG', options: [] },
        { title: 'About', shortTitle: 'ABT', options: [] }
        ]}>
        <div className='flex m-4'>
          <span>
            <Image
              src="/256.png"
              alt="Picture of Andrew Sweet"
              priority 
              height={256}
              width={256} />
          </span>
          <span className='ml-4'>
            <h1 className='text-5xl whitespace-nowrap'>Andrew Sweet</h1>
            <div className='text-2xl mt-2'>
              <div>Full-Stack Engineer</div>
              <div>
                <div>TypeScript</div>
                <div>Rust</div>
                <div>Python</div>
                <div>React</div>
                <div>Tailwind</div>
                <div>Python</div>
                <div>GraphQL</div>
                <div>Objective C</div>
                <div>d3</div>
                <div>ReactFlow</div>
                <div>Kubernetes</div>
                <div>Docker</div>
                <div>...</div>
              </div>
            </div>
          </span>
        </div>
      </VirtualWindow>
    </main>
  );
}
