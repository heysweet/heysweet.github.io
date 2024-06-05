import { Preview } from "@/components/Preview";
import { projects } from ".";
import PageHeader from "@/components/PageHeader";

export default function ProjectsPage() {
    return (<div>
        <PageHeader>Projects</PageHeader>
        {(projects.map((project) => {
            return <div key={project.name} className="w-full">
                <Preview id={project.id} title={project.name} icon={project.iconSrc}>
                    {project.preview}
                </Preview>
            </div>
        }))}
    </div>);
}