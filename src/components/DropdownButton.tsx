'use client';

import { Experience } from '@/types/PagePreview';
import Link from 'next/link';
import Image from 'next/image';
import React, { useCallback, useEffect } from 'react';
import { twJoin } from 'tailwind-merge';
import { useDebounceCallback } from 'usehooks-ts';
import { formatDateDuration } from '@/utils/date';
import FocusTrap from 'focus-trap-react';

const FOCUS_TRAP_OPTIONS: FocusTrap.Props['focusTrapOptions'] = { allowOutsideClick: true };

export interface DropdownButtonProps {
  title: string;
  /**
   * For smaller displays, the short title is used.
   */
  shortTitle: string;
  options: Experience[];
  isActive?: boolean;
  onBlur: () => void;
  onFocus: () => void;
  open: () => void;
  close: () => void;
  className?: string;
};

const DEBOUNCE_MILLIS = 30;

type DropdownOptionsProps = {
  options: Experience[];
  close: () => void;
}

function DropdownOptions({ options, close }: DropdownOptionsProps) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const activeOption = hovered;
  const selectedOption = options.find((option) => option.href === activeOption);

  const onHover = useDebounceCallback((id?: string) => {
    setHovered(id ?? null);
  }, DEBOUNCE_MILLIS);

  const onFocus = useDebounceCallback((id: string) => {
    setCurrentIndex(options.findIndex((option) => option.href === id));
  }, DEBOUNCE_MILLIS);

  const linkRefs = React.useRef<HTMLAnchorElement[]>([]);

  const focusNext = useCallback((diff: -1 | 1) => {
    const nextIndex = (currentIndex + diff + options.length) % options.length;
    linkRefs.current[nextIndex].focus();
  }, [currentIndex, options.length]);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          close();
          break;
        case 'ArrowDown':
          focusNext(1);
          break;
        case 'ArrowUp':
          focusNext(-1);
          break;
        case 'ArrowRight':
        case 'ArrowLeft':
          close();
          break;
        case ' ':
          linkRefs.current[currentIndex]?.click();
          break;
      }
    };

    document.addEventListener("keydown", onKeydown, false);

    return () => {
      document.removeEventListener("keydown", onKeydown, false);
    }
  }, [currentIndex, focusNext, close]);

  return <div className='absolute w-full top-8 left-0 border-black border-b bg-green'>
    <FocusTrap focusTrapOptions={FOCUS_TRAP_OPTIONS}>
      <div>
        {options.map((option, index) => {
          return <span key={option.href}>
            <Link
              ref={(el) => { if (el) linkRefs.current[index] = el }}
              className='whitespace-nowrap flex items-center select-none space-x-1 pl-2 pr-6 truncate bg-transparent'
              href={option.href}
              target={option.href.startsWith('/') ? undefined : '_blank'}
              onFocus={() => onFocus(option.href)}
              onMouseOver={() => onHover(option.href)}
              onMouseOut={() => onHover()}>
                {option.iconSrc && <Image className='inline-block mr-2' src={option.iconSrc} alt="Brand logo" width={16} height={16}/>}
                <span className='flex-1 truncate'>{option.name}</span>
                {option.startDate && <span className='pl-4 flex-0 truncate text-right'>{formatDateDuration(option.startDate, option.endDate)}</span>}
            </Link>
          </span>;
        })}
      </div>
    </FocusTrap>
    <div aria-hidden={true} className='bg-black text-green'>{selectedOption?.preview}</div>
  </div>
}

export const DropdownButton = React.forwardRef<HTMLButtonElement, DropdownButtonProps>(
  ({ title, isActive, options, onFocus, onBlur, open, close, className }, ref) => {
  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    const listener = () => {
      window.removeEventListener('click', listener);
      close();
    }
    window.addEventListener('click', listener);
    isActive ? close() : open();
    e.stopPropagation();
  }

  return (<>
    <button
      ref={ref}
      role='menuitem'
      aria-haspopup="menu"
      className={twJoin('px-2 box-border h-6 leading-3 bg-transparent select-none', className, isActive ? 'border-black' : 'border-transparent', isActive && 'checkerboard')}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}>
        {title}
    </button>
    {isActive && <DropdownOptions options={options} close={close} />}
  </>);
});
DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;