import { PropsWithChildren } from "react";

export default function PageHeader({ children }: PropsWithChildren) {
    return (
        <div className="flex">
            <div className="flex-1 border-t mt-4 border-green" />
            <h1 className="text-xl mb-4 mx-2 flex-0">{children}</h1>
            <div className="flex-1 border-t mt-4 border-green" />
        </div>
    );
}