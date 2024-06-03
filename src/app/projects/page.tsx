import { Preview } from "@/components/Preview";
import { projects } from ".";

export default function ProjectsPage() {
    return (<div>
    {(projects.map((project) => {
        return <div key={project.name} className="w-full">
            <Preview id={project.id} title={project.name} icon={project.iconSrc}>
                {project.preview}
            </Preview>
        </div>
    }))}</div>);
}