'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import DropdownButton, { DropdownButtonProps } from './DropdownButton';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  items?: Omit<DropdownButtonProps, 'open' | 'close'>[];
}

export default function Container({
  title,
  children,
  items,
  ...props
}: ContainerProps) {
  const [activeButton, setActiveButton] = React.useState<string|null>(null);

  return (
    <div {...props} className={twMerge('border-green border', props.className)}>
        <div className='w-full h-8 bg-green border-black border border-b-0 text-black text-2xl px-2 space-x-2'>
          <span>{title}</span>
          {items?.map((item)=> {
            return <DropdownButton
                      {...item}
                      key={item.title}
                      isActive={activeButton === item.title}
                      open={() => setActiveButton(item.title)}
                      close={() => setActiveButton(null)} />
          })}
        </div>
        <div className='border-black border border-dotted'>{children}</div>
    </div>
  );
}