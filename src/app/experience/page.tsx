import { relevantExperience } from ".";
import { Preview } from "@/components/Preview";

export default function ExperiencePage() {
    return (<div>
    {(relevantExperience.map((experience) => {
        return <div key={experience.name} className="w-full">
            <Preview title={experience.name} icon={experience.iconSrc}>
                {experience.preview}
            </Preview>
        </div>
    }))}</div>);
}