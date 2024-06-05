import { Preview } from "@/components/Preview";
import { education } from ".";
import PageHeader from "@/components/PageHeader";

export default function EducationPage() {
    return (<div>
        <PageHeader>Education</PageHeader>
        {(education.map((experience) => {
            return <div key={experience.name} className="w-full">
                <Preview id={experience.id} title={experience.name} icon={experience.iconSrc}>
                    {experience.preview}
                </Preview>
            </div>
        }))}
    </div>);
}