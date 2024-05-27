import { PagePreview } from '@/types/PagePreview';
import { Resume } from './resume';

const Preview: React.FC = () => {
    return (<Resume 
        jobTitle={'Senior Software Engineer'}
        startDate={new Date('2021-04-01')}
        endDate={null}
        externalWebsite={null}
        description={`
        - Transformed my hackathon-winning project into dbt Explorer, a flag-ship product for dbt Labs.
        - Built and maintained dbt-dag, a react library and npm package for visualizing dbt models across dbt Cloud.
        - test3
        `.trim()}
    />)
};

const Page: React.FC = () => {
    return (<>
        <Preview />
        <div>Full Page</div>
    </>)
};

export const DbtLabs: PagePreview = {
    title: 'dbt Labs',
    externalWebsite: 'https://www.getdbt.com/',
    iconSrc: '/public/dbt.png',
    preview: <Preview />,
    page: <Page />,
    href: '/career#dbt-labs'
}