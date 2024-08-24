'use client'
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"
import Image from 'next/image';

export type ImageProps = {
    src: string;
    alt: string;
}

type ImageOverlayContextType = {
    setImage: (img: ImageProps | null) => void;
}

const ImageOverlayContext = createContext<ImageOverlayContextType>({
    setImage: () => {}
});

type ImageOverlayProps = PropsWithChildren & {};

export const ImageOverlay: FC<ImageOverlayProps> = ({ children }) => {
    const [imgData, setImage] = useState<ImageProps | null>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setImage(null);
            }
        };

        const handleClick = (event: MouseEvent) => {
            setImage(null);
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (<ImageOverlayContext.Provider value={{ setImage }}>
        <>
            <div className='m-4'>
                {children}
            </div>
            {imgData && <div className="absolute inset-0 checkerboard-lg" onClick={() => setImage(null)}>
                <Image src={imgData.src} alt={imgData.alt} fill className="h-full w-full object-contain animate-img-load" />
            </div>}
        </>
    </ImageOverlayContext.Provider>)
}

export const useOpenImageOverlay = () => {
    return useContext(ImageOverlayContext).setImage;
}