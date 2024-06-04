'use client';

import { Experience } from '@/types/PagePreview';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { twJoin } from 'tailwind-merge';
import { useDebounceCallback } from 'usehooks-ts';
import { formatDateDuration } from '@/utils/date';


export interface DropdownButtonProps {
  title: string;
  /**
   * For smaller displays, the short title is used.
   */
  shortTitle: string;
  options: Experience[];
  isActive?: boolean;
  open: React.MouseEventHandler<HTMLButtonElement>;
  close: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const DEBOUNCE_MILLIS = 30;

export default function DropdownButton({
  title,
  isActive,
  options,
  open,
  close,
  className,
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
  const [focused, setFocused] = React.useState<string | null>(null);

  const activeOption = hovered || focused;
  const selectedOption = options.find((option) => option.href === activeOption);

  const onHover = useDebounceCallback((id?: string) => {
    setHovered(id ?? null);
  }, DEBOUNCE_MILLIS);
  const onFocus = useDebounceCallback((id: string) => {
    setHovered(id);
    setFocused(id);
  }, DEBOUNCE_MILLIS);
  const onBlur = useDebounceCallback(() => {
    setFocused(null);
  }, DEBOUNCE_MILLIS);

  return (<>
    <button
      role='menuitem'
      aria-haspopup="menu"
      className={twJoin('px-2 box-border h-6 leading-3 bg-transparent', className, isActive ? 'border-black' : 'border-transparent', isActive && 'checkerboard')}
      onClick={onClick}
      onFocus={(e)=>{}}>
        {title}
    </button>
    {isActive && <div className='absolute w-full top-8 left-0 border-black border-b bg-green'>
      {options.map((option) => {
        return <span key={option.href} className=''>
          <Link
            className='whitespace-nowrap flex items-center space-x-1 pl-2 pr-6 overflow-hidden truncate bg-transparent'
            href={option.href}
            target={option.href.startsWith('/') ? undefined : '_blank'}
            onFocus={() => onFocus(option.href)}
            onMouseOver={() => onHover(option.href)}
            onBlur={onBlur}
            onMouseOut={() => onHover()}>
              {option.iconSrc && <Image className='inline-block mr-2' src={option.iconSrc} alt="Brand logo" width={16} height={16}/>}
              <span className='flex-1 overflow-hidden truncate'>{option.name}</span>
              {option.startDate && <span className='pl-4 flex-0 truncate text-right'>{formatDateDuration(option.startDate, option.endDate)}</span>}
          </Link>
        </span>;
      })}
      <div className='bg-black text-green'>{selectedOption?.preview}</div>
    </div>}
  </>);
}