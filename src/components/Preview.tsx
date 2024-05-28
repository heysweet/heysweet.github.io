import { PropsWithChildren } from "react";

export const Preview: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (<span className='w-full border border-black'>
        {children}
    </span>);
};