import { FC } from "react";
import Image from 'next/image';

type ResumeProps = {
    title: string;

    startDate: Date;
    endDate: Date | null;

    externalWebsite: string | null;
    
    description: string;
}

function formatDate(date: Date | null) {
    if (!date) {
        return 'Present';
    }
    return date.toLocaleDateString(undefined, {month: '2-digit', year: 'numeric'});
}

export const Resume: FC<ResumeProps> = ({ title: jobTitle, startDate, endDate, externalWebsite, description }: ResumeProps) => {
    return (
        <div className='flex flex-row p-4 text-md'>
            <div>
                <h3 className="whitespace-nowrap">{jobTitle}</h3>
                <p className="whitespace-nowrap space-x-2">
                    <Image src="/calendar.png" alt="Work dates" width={16} height={16} priority className="ml-1 inline align-middle" />
                    <span className="align-middle">{formatDate(startDate)} - {formatDate(endDate)}</span>
                </p>
                <p className="mt-5 whitespace-pre-line">{description}</p>
                {externalWebsite && <a href={externalWebsite} target='_blank' rel='noreferrer'>Website</a>}
            </div>
        </div>
    );
}