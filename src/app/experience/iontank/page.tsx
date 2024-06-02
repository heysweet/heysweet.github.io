import Image from 'next/image'
import { iontank } from './iontank';

iontank

export default function IontankPage() {
  return (
    <div>
      <div className='block'>
          <Image
              className='skip-chroma animate-img-load'
              src={iontank.heroImageSrc}
              alt="Picture of Andrew Sweet"
              priority 
              height={1307}
              width={1960} />
      </div>
      <div className='ml-4 block'>
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
      </div>
    </div>
  );
}