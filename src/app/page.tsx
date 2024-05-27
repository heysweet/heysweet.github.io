import Container from '@/components/Container';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:p-20  bg-black text-green">
      <Container title='System' className='w-full max-w-6xl' items={[
        { title: 'Projects', options: ['test', 'test2'] },
        { title: 'Languages', options: [] },
        { title: 'About', options: [] }
        ]}>
        <span>
          <Image src="/256.png" alt="Picture of Andrew" priority className='filter()' height={256} width={256} />
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
      </Container>
    </main>
  );
}
