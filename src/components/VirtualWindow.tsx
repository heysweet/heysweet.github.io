'use client';

import React, { useCallback, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import DropdownButton, { DropdownButtonProps } from './DropdownButton';
import { useResizeObserver } from 'usehooks-ts';

interface ContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'ref'> {
  items?: Pick<DropdownButtonProps, 'title' | 'shortTitle' | 'options' | 'isActive' | 'className'>[];
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
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const size = useResizeObserver({ ref: containerRef, box: 'border-box' });

  const shouldUseShortTitle = size?.width != null && size.width < SHORT_TITLE_MAX_WIDTH;

  const menuItemRefs = React.useRef<(HTMLButtonElement | HTMLAnchorElement)[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState<number>(-1);

  const focusNext = useCallback((diff: -1 | 1) => {
    const options = menuItemRefs.current;
    const nextIndex = (currentIndex + diff + options.length) % options.length;
    options[nextIndex].focus();
  }, [currentIndex]);

  function onFocus(index: number) {
    setCurrentIndex(index);
  }

  function onBlur() {
    setCurrentIndex(-1);
  }

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (currentIndex === -1) return;
      switch (event.key) {
        case 'ArrowRight':
          focusNext(1);
          break;
        case 'ArrowLeft':
          focusNext(-1);
          break;
      }
    };


    function close(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActiveButton(null);
      }
    }

    document.addEventListener("keydown", onKeydown, false);
    document.addEventListener("click", close, false);

    return () => {
      document.removeEventListener("keydown", onKeydown, false);
      document.removeEventListener("click", close, false);
    }
  }, [currentIndex, focusNext]);

  return (
    <div {...props} className={twMerge('border-green border relative h-full', props.className)} ref={containerRef} >
      <div className='w-full px-1 absolute top-0 h-8.5 bg-green border-black border border-b-0 text-black text-2xl z-10' ref={menuRef}>
        <a 
          className='px-2 bg-transparent max-[350px]:hidden inline'
          href="/"
          ref={(el) => {if (el) menuItemRefs.current[0] = el}}
          onFocus={() => onFocus(0)}
          onBlur={onBlur}
        >
          <span className='sr-only'>Home</span>
          <span aria-hidden="true">andrewmsweet.com</span>
        </a>
        <div className='float-right' role='menubar'>
          {items?.map((item, index)=> (
            <DropdownButton
              {...item}
              onFocus={() => onFocus(index + 1)}
              onBlur={onBlur}
              ref={(el) => {if (el) menuItemRefs.current[index + 1] = el}}
              title={shouldUseShortTitle ? item.shortTitle : item.title}
              className='px-1 overflow-hidden'
              key={item.title}
              isActive={activeButton == null ? undefined : activeButton === item.title}
              open={() => setActiveButton(item.title)}
              close={() => setActiveButton(null)} />
          ))}
        </div>
      </div>
      <div className='w-full h-full overflow-y-auto overflow-x-hidden py-8'>{children}</div>
    </div>
  );
}