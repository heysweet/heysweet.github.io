'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import DropdownButton, { DropdownButtonProps } from './DropdownButton';
import { useResizeObserver } from 'usehooks-ts';

interface ContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  items?: Omit<DropdownButtonProps, 'open' | 'close'>[];
}

const SHORT_TITLE_MAX_WIDTH = 520;

/**
 * VirtualWindow is a container with a top bar for menu items,
 * and a content area for children.
 */
export default function VirtualWindow({
  title,
  children,
  items,
  ...props
}: ContainerProps) {
  const [activeButton, setActiveButton] = React.useState<string|null>(null);

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const size = useResizeObserver({ ref: containerRef, box: 'border-box' });

  const shouldUseShortTitle = size?.width != null && size.width < SHORT_TITLE_MAX_WIDTH;

  return (
    <div {...props} className={twMerge('border-green border overflow-hidden', props.className)} ref={containerRef} >
        <div className='w-full h-8 bg-green border-black border border-b-0 text-black text-2xl relative z-10'>
          <a className='p-2' href="/">andrewmsweet.com</a>
          <div className='float-right'>
            {items?.map((item)=> (
              <DropdownButton
                {...item}
                title={shouldUseShortTitle ? item.shortTitle : item.title}
                className='px-1'
                key={item.title}
                isActive={activeButton == null ? undefined : activeButton === item.title}
                open={() => setActiveButton(item.title)}
                close={() => setActiveButton(null)} />
            ))}
          </div>
        </div>
        <div>{children}</div>
    </div>
  );
}