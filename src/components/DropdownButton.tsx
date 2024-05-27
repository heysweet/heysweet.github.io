'use client';

import Link from 'next/link';
import React from 'react';

export interface DropdownButtonProps {
  title: string;
  options: string[];
  isActive?: boolean;
  open: React.MouseEventHandler<HTMLButtonElement>;
  close: React.MouseEventHandler<HTMLButtonElement>;
};

function getHref(title: string, option: string) {
  return `/${title.toLowerCase()}#${option}`;
}

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

  return (<span className='relative'>
    <button className='px-2' onClick={onClick}>{title}</button>
    {isActive && <div className='absolute top-7 left-0 px-2 bg-green border-black border border-t-0'>
        {options.map((option) => {
          return <Link
            className='block'
            key={option}
            href={getHref(title, option)}>
              {option}
          </Link>;
        })}
      </div>}
  </span>);
}