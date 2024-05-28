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
    name: 'dbt Labs',
    title: 'Senior Software Engineer',

    startDate: new Date('2021-04-01'),
    endDate: null, // Still work here

    description: `
    TypeScript, React, Rust, Node.js, Python, Redis, and GraphQL.

    - Transformed my hackathon-winning project into dbt Explorer, a flag-ship product for dbt Labs.
    - Built and maintained multiple npm pages, including dbt-dag (a React library for visualizing dbt resources across dbt Cloud) and dagnabbit (a Rust library for handling selector syntax parsing and graph traversal problems).`.trim(),

    externalWebsite: 'https://www.getdbt.com/',
    iconSrc: '/dbt.png',
    preview: <Preview />,
    page: <Page />,
    href: '/career#dbt-labs'
} satisfies Experience;