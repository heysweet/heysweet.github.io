import { PropsWithChildren } from "react";
import Image from 'next/image';

const _Preview: React.FC<PropsWithChildren<{ title?: string }>> = ({ children }) => {
    return (<span className='w-full border border-black'>
        {children}
    </span>);
};

export const Preview: React.FC<PropsWithChildren<{ title?: string, icon?: string }>> = ({ title, children, icon }) => {
    if (title) {
        return (
            <div className="relative">
                <div className="absolute -top-6" id={title.replaceAll(' ', '-').toLowerCase()} />
                <div className="absolute bg-black top-2.5 left-2 text-lg px-2">
                    {icon && <Image width={16} height={16} src={icon} alt={title} className="inline align-middle transform-green mr-2 -mt-0.5" />}
                    <span>{title}</span>
                </div>
                <_Preview>{children}</_Preview>
            </div>
        );
    }
    return (<_Preview >{children}</_Preview>);
};