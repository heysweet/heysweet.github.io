import { FC } from "react";
import Image from 'next/image';
import { formatDateRange } from "@/utils/date";

type ResumeProps = {
    title: string;

    startDate: Date;
    endDate: Date | null;

    externalWebsite: string | null;
    
    description: string;
    heroImageSrc?: string;
}

export const Resume: FC<ResumeProps> = ({ title: jobTitle, startDate, endDate, externalWebsite, description, heroImageSrc }: ResumeProps) => {
    return (
        <div className='flex flex-col lg:flex-row p-4 text-lg bg-black text-green border border-green'>
            <div className="flex-1 mr-4">
                <h3 className="whitespace-nowrap">{jobTitle}</h3>
                <p className="whitespace-nowrap space-x-2">
                    <Image src="/calendar.png" alt="Work dates" width={16} height={16} priority className="ml-1 inline align-middle transform-green skip-chroma" />
                    <span className="align-middle">{formatDateRange(startDate, endDate)}</span>
                </p>
                <p className="mt-5 whitespace-pre-line">{description}</p>
                {externalWebsite && <a href={externalWebsite} target='_blank' rel='noreferrer'>Website</a>}
            </div>
            {heroImageSrc && 
            <div className="flex-0">
                <Image className="skip-chroma animate-img-load"
                    src={heroImageSrc}
                    width={450}
                    height={300}
                    alt='' />
            </div>}
        </div>
    );
}