'use client';

import React, { RefObject, useMemo } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';
import DropdownButton, { DropdownButtonProps } from './DropdownButton';
import { useResizeObserver } from 'usehooks-ts';

interface ContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  items?: Omit<DropdownButtonProps, 'open' | 'close'>[];
}

export default function Container({
  title,
  children,
  items,
  ...props
}: ContainerProps) {
  const [activeButton, setActiveButton] = React.useState<string|null>(null);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const size = useResizeObserver({ ref: containerRef, box: 'border-box', onResize: (size) => console.log(size) });

  return (
    <div {...props} className={twMerge('border-green border overflow-hidden', props.className)} ref={containerRef} >
        <div className='w-full h-8 bg-green border-black border border-b-0 text-black text-2xl relative'>
          {items?.map((item)=> {
            return <DropdownButton
                      {...item}
                      className='px-1'
                      key={item.title}
                      isActive={activeButton == null ? undefined : activeButton === item.title}
                      open={() => setActiveButton(item.title)}
                      close={() => setActiveButton(null)} />
          })}
        </div>
        <div className=''>{children}</div>
    </div>
  );
}