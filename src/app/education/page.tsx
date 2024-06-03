import { Preview } from "@/components/Preview";
import { education } from ".";

export default function EducationPage() {
    return (<div>
    {(education.map((experience) => {
        return <div key={experience.name} className="w-full">
            <Preview title={experience.name} icon={experience.iconSrc}>
                {experience.preview}
            </Preview>
        </div>
    }))}</div>);
}