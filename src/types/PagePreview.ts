/**
 * A standardized format for page previews.
 */
export type PagePreview = {
    /**
     * The title of the page.
     */
    title: string;
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