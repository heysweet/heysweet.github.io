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

  const onHover = useDebounceCallback((id: string) => {
    setHovered(id);
  }, 5);
  const onUnhover = useDebounceCallback(() => {
    setHovered(null);
  }, 5);
  const onFocus = useDebounceCallback((id: string) => {
    setHovered(id);
    setFocused(id);
  }, 5);
  const onBlur = useDebounceCallback(() => {
    setFocused(null);
  }, 5);

  return (<>
    <button className={twJoin('border border-dashed box-border h-[31px] hover:border-black active:border-black', className, isActive ? 'border-black' : 'border-transparent', isActive === false && 'checkerboard')} onClick={onClick}>{title}</button>
    {isActive && <div className='absolute w-full top-8 left-0 bg-green border-black border border-t-0'>
      {options.map((option) => {
        return <span key={option.href} className=''>
          <Link
            className='whitespace-nowrap flex items-center space-x-1 pl-2 pr-6 border border-dashed hover:border-black'
            href={option.href}
            onFocus={() => onFocus(option.href)}
            onMouseOver={() => onHover(option.href)}
            onBlur={onBlur}
            onMouseOut={onUnhover}>
              {option.iconSrc && <Image className='inline-block mr-2' src={option.iconSrc} alt="Brand logo" width={16} height={16}/>}
              <span className='flex-1'>{option.name}</span>
              <span className='pl-4 flex-1 truncate text-right'>{formatDateDuration(option.startDate, option.endDate)}</span>
          </Link>
        </span>;
      })}
      <div>{selectedOption?.preview}</div>
    </div>}
  </>);
}