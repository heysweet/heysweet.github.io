import { PagePreview } from '@/types/PagePreview';

const Preview: React.FC = () => {
    return (<div>Preview</div>)
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
    Preview,
    Page,
    href: '/career#dbt-labs'
}