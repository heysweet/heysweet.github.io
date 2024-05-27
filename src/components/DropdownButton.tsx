'use client';

import { PagePreview } from '@/types/PagePreview';
import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment } from 'react';

export interface DropdownButtonProps {
  title: string;
  options: PagePreview[];
  isActive?: boolean;
  open: React.MouseEventHandler<HTMLButtonElement>;
  close: React.MouseEventHandler<HTMLButtonElement>;
};

export default function DropdownButton({
  title,
  isActive,
  options,
  open,
  close,
}: DropdownButtonProps) {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const listener = () => {
      window.removeEventListener('click', listener);
      close(e);
    }
    window.addEventListener('click', listener);
    isActive ? close(e) : open(e);
    e.stopPropagation();
  }

  const [hovered, setHovered] = React.useState<string | null>(null);

  function onHover(id: string) {
    setHovered(id);
  }

  function onBlur() {
    setHovered(null);
  }

  return (<span className='relative'>
    <button className='px-2' onClick={onClick}>{title}</button>
    {isActive && <div className='absolute top-7 left-0 bg-green border-black border border-t-0'>
        {options.map((option) => {
          return <span key={option.href} className='relative w-full'>
            <Link
              className='whitespace-nowrap flex items-center space-x-1 pl-2 pr-6'
              href={option.href}
              onFocus={() => onHover(option.href)}
              onBlur={onBlur}
              onMouseOver={() => onHover(option.href)}
              onMouseOut={onBlur}>
                {option.iconSrc && <Image className='inline-block' src="/dbt.png" alt="Brand logo" width={16} height={16}/>}
                <span>{option.title} {'>'}</span>
            </Link>
            <span className='absolute right-0 top-0'>
              <span className='absolute px-2 bg-green border border-black border-t-0'>
                {option.preview}
              </span>
            </span>
          </span>;
        })}
      </div>}
  </span>);
}