import { Experience } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume {...dbtLabs} />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const dbtLabs = {
    id: 'dbt-labs',
    name: 'dbt Labs',
    title: 'Senior Software Engineer',

    startDate: new Date('2021-04-01'),
    endDate: null, // Still work here

    description: <div className='space-y-4'>
    <div>
    TypeScript, React, Rust, Node.js, Python, Postgres, Redis, and GraphQL.
    </div>

    <div>
    - Transformed my hackathon-winning project into <a href="https://www.getdbt.com/blog/proactively-improve-your-dbt-projects-with-new-dbt-explorer-features" target='_blank'>dbt Explorer</a>,
    a flag-ship product for dbt Labs.
    <br />
    - On-boarded team of 4 backend engineers into Explorer, teaching React, Tailwind, and advanced TypeScript knowledge.
    <br />
    - Built and maintained multiple npm packages, including dbt-dag (a React library for visualizing dbt resources across dbt Cloud as a Directed Acyclic Graph) and dagnabbit (a Rust library for handling selector syntax parsing and graph traversal for subgraph selection).
    </div>
    <div>
        <a href="https://www.getdbt.com/" target='_blank'>
            getdbt.com
        </a>
    </div>
    </div>,

    heroImageSrc: '/dag.png',
    iconSrc: '/dbt.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#dbt-labs'
} satisfies Experience;