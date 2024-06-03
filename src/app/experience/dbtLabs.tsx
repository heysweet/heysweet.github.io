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

    description: `
    TypeScript, React, Rust, Node.js, Python, Postgres, Redis, and GraphQL.

    - Transformed my hackathon-winning project into dbt Explorer, a flag-ship product for dbt Labs.
    - Built and maintained multiple npm packages, including dbt-dag (a React library for visualizing dbt resources across dbt Cloud as a Directed Acyclic Graph) and dagnabbit (a Rust library for handling selector syntax parsing and graph traversal for subgraph selection).`.trim(),

    externalWebsite: 'https://www.getdbt.com/',
    heroImageSrc: '/dag.png',
    iconSrc: '/dbt.png',
    preview: <Preview />,
    page: <Page />,
    href: '/experience#dbt-labs'
} satisfies Experience;