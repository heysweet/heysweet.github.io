'use client'
import { FC, ReactNode } from "react";
import Image from 'next/image';
import { accessibleDateRange, formatDateRange } from "@/utils/date";
import { twJoin } from "tailwind-merge";
import { ImageProps, useOpenImageOverlay } from "@/components/ImageOverlay";

type ResumeProps = {
    title: string;

    startDate: Date | null;
    endDate: Date | null;

    externalWebsite?: string | null;
    
    description: ReactNode;
    heroImageSrc?: string;
    tintImage?: boolean;
}

export const Resume: FC<ResumeProps> = ({ title: jobTitle, startDate, endDate, externalWebsite, description, heroImageSrc, tintImage }: ResumeProps) => {
    const openImage = useOpenImageOverlay();

    const heroImage: ImageProps = {
        src: heroImageSrc!,
        alt: 'dbt Labs',
    };
    return (
        <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row p-4 text-lg bg-black text-green border border-green'>
            <div className="flex-1 mr-4">
                <h3 className="whitespace-nowrap">{jobTitle}</h3>
                {startDate && <p className="whitespace-nowrap space-x-2">
                    <Image src="/calendar.png" alt="Work dates" width={16} height={16} priority className="ml-1 inline align-middle transform-green skip-chroma" />
                    <span className="align-middle">
                        <span className="sr-only">{accessibleDateRange(startDate, endDate)}</span>
                        <span aria-hidden>{formatDateRange(startDate, endDate)}</span>
                    </span>
                </p>}
                <div className="mt-5 whitespace-pre-line">{description}</div>
                {externalWebsite && <a href={externalWebsite} target='_blank' rel='noreferrer'>Website</a>}
            </div>
            {heroImageSrc && 
            <div className="flex-0 relative">
                <Image className={twJoin("skip-chroma animate-img-load", tintImage && 'sepia-green')}
                    {...heroImage}
                    alt={heroImage.alt}
                    width={450}
                    height={300}
                    onClick={() => openImage(heroImage)} />
                {tintImage && <div className="absolute inset-0 bg-black opacity-20 pointer-events-none" />}
            </div>}
        </div>
    );
}