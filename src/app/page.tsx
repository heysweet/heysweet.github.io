import Image from 'next/image'

export default function LandingPage() {
  return (
    <>
      <span>
          <Image
              className='skip-chroma'
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
    </>
  );
}