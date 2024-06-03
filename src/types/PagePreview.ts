import { ReactNode } from "react";

/**
 * A standardized format for Relevant Experiences.
 */
export type Experience = {
    /**
     * A unique identifier for the Experience.
     */
    id: string;
    /**
     * The name of the Experience.
     */
    name: string;
    /**
     * My title during the experience.
     */
    title: string;

    /**
     * The start date of the experience.
     */
    startDate: Date | null;
    /**
     * The end date of the experience.
     */
    endDate: Date | null;

    /**
     * The URL of the hero image to display.
     */
    heroImageSrc?: string;

    /**
     * A brief description of the experience.
     */
    description: ReactNode;

    /**
     * The URL of the page to link to.
     */
    href: string;

    /**
     * The URL of the external website to link to.
     */
    externalWebsite?: string;
    /**
     * The URL of an icon to display next to the page preview.
     */
    iconSrc?: string;
    /**
     * A React component that renders a preview of the page.
     */
    preview?: React.ReactNode;
    /**
     * A React component that renders the full page.
     */
    page?: React.ReactNode;
};