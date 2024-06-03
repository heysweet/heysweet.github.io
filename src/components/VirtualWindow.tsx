'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import DropdownButton, { DropdownButtonProps } from './DropdownButton';
import { useResizeObserver } from 'usehooks-ts';

interface ContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  items?: Omit<DropdownButtonProps, 'open' | 'close'>[];
}

export const SHORT_TITLE_MAX_WIDTH = 768;

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
    <div {...props} className={twMerge('border-green border overflow-clip relative h-full', props.className)} ref={containerRef} >
        <div className='w-full absolute top-0 h-8 bg-green border-black border border-b-0 text-black text-2xl z-10'>
          <a className='pt-2 pb-1 px-2 bg-transparent max-[350px]:hidden inline' href="/">andrewmsweet.com</a>
          <div className='float-right' role='menubar'>
            {items?.map((item)=> (
              <DropdownButton
                {...item}
                title={shouldUseShortTitle ? item.shortTitle : item.title}
                className='px-1 overflow-hidden'
                key={item.title}
                isActive={activeButton == null ? undefined : activeButton === item.title}
                open={() => setActiveButton(item.title)}
                close={() => setActiveButton(null)} />
            ))}
          </div>
        </div>
        <div className='w-full h-full overflow-y-auto py-8'>{children}</div>
    </div>
  );
}