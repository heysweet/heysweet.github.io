import { Experience } from "@/types/PagePreview";

export type Project = Experience & {
    employer?: string;
}