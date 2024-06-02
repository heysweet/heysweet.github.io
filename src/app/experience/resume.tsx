import { FC } from "react";
import Image from 'next/image';
import { formatDateRange } from "@/utils/date";

type ResumeProps = {
    title: string;

    startDate: Date;
    endDate: Date | null;

    externalWebsite: string | null;
    
    description: string;
}

export const Resume: FC<ResumeProps> = ({ title: jobTitle, startDate, endDate, externalWebsite, description }: ResumeProps) => {
    return (
        <div className='flex flex-row p-4 text-md bg-black text-green border border-green'>
            <div>
                <h3 className="whitespace-nowrap">{jobTitle}</h3>
                <p className="whitespace-nowrap space-x-2">
                    <Image src="/calendar.png" alt="Work dates" width={16} height={16} priority className="ml-1 inline align-middle transform-green skip-chroma" />
                    <span className="align-middle">{formatDateRange(startDate, endDate)}</span>
                </p>
                <p className="mt-5 whitespace-pre-line">{description}</p>
                {externalWebsite && <a href={externalWebsite} target='_blank' rel='noreferrer'>Website</a>}
            </div>
        </div>
    );
}