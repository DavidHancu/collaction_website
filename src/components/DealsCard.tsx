import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {
  FiGlobe as GlobeSimpleIcon,
  FiMapPin as MapPinIcon,
  FiPhone as PhoneIcon,
  FiPlus as PlusIcon,
  FiX as XIcon,
} from 'react-icons/fi';
import { DealsType } from 'src/types/deals';

export function DealsCard({
  title,
  image,
  links,
  content,
}: Omit<DealsType, 'publish' | 'featured'>) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [showContent, setShowContent] = useState(false);
  const [contentOverflow, setContentOverflow] = useState(true);

  // used to check if text content is overflowing it's container
  // if so, we'll show an expand button
  // saves valuable space on one column layouts
  useEffect(() => {
    const contentEl = contentRef.current;
    if (contentEl) {
      setContentOverflow(contentEl.scrollHeight - contentEl.clientHeight > 5);
    }
  }, []);

  return (
    <div className="bg-secondary max-w-400 w-full rounded-3xl overflow-hidden relative mb-8 md:mx-4">
      {/* IMAGE */}
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <Image
          src={image}
          alt={title}
          // placeholder="blur"
          layout="fill"
          objectFit="cover"
          sizes="min-width(450px) 90vw, 400px"
        />
      </div>
      {/* ICONS */}
      <div className="px-6 xs:px-8 sm:px-10 my-6 sm:my-8 h-10 flex">
        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Vendor Site"
            className="bg-black-400 text-secondary p-2 mr-2 xs:mr-5 rounded-full"
          >
            <GlobeSimpleIcon size={24} strokeWidth={2} />
          </a>
        )}
        {links.location && (
          <a
            href={links.location}
            target="_blank"
            rel="noreferrer"
            aria-label="View Location on Map"
            className="bg-black-400 text-secondary p-2 mr-2 xs:mr-5 rounded-full"
          >
            <MapPinIcon size={24} strokeWidth={2} />
          </a>
        )}
        {links.phone && (
          <a
            href={'tel:+' + links.phone}
            target="_blank"
            rel="noreferrer"
            aria-label="Phone Vendor"
            className="bg-black-400 text-secondary p-2 mr-2 xs:mr-5 rounded-full"
          >
            <PhoneIcon size={24} strokeWidth={2} />
          </a>
        )}
        <a
          href={links.order}
          target="_blank"
          rel="noreferrer"
          aria-label="Order From Vendor"
          className={clsx(
            links.order ? 'bg-accent' : 'bg-black-100 pointer-events-none',
            'text-secondary text-button font-bold leading-none text-center rounded-full p-3 h-10 w-26 align-top'
          )}
        >
          {links.order ? 'Order' : 'In-store'}
        </a>
      </div>
      {/* TITLE & CONTENT */}
      <div className="px-6 xs:px-8 sm:px-10">
        <h4 className="text-black-400 mb-5 sm:mb-8">{title}</h4>
        <div
          ref={contentRef}
          className="text-black-300 h-full max-h-32 line-clamp-5 whitespace-pre-line"
        >
          {content}
        </div>
      </div>
      {/* MAXIMIZE CONTENT ICON */}
      <div className="py-6 sm:py-8 pl-8 pr-5 sm:pl-10 sm:pr-8 text-right">
        {contentOverflow && (
          <button
            onClick={() => setShowContent(true)}
            className="inline-block bg-black-100 text-secondary p-2 rounded-full"
          >
            <PlusIcon size={24} strokeWidth={2} />
          </button>
        )}
      </div>

      {/* OPENED CARD */}
      {contentOverflow && (
        <div
          className={clsx(
            'absolute top-0 left-0 w-full h-full bg-accent text-secondary rounded-3xl transition-opacity',
            showContent ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          style={{
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(0,0,0.58,1)',
          }}
        >
          <div className="flex flex-col justify-between h-full">
            {/* TITLE & CONTENT */}
            <div className="overflow-auto px-8 sm:px-10 pt-8 flex flex-col">
              <h5 className="text-title-2 mb-6 sm:mb-8">{title}</h5>
              <div className="overflow-y-scroll scrollbar-track-accent-500 scrollbar-thumb-secondary whitespace-pre-line">
                {content}
              </div>
            </div>
            {/* MINIMIZE CONTENT ICON */}
            <div className="py-6 sm:py-8 pl-8 pr-5 sm:pl-10 sm:pr-8 text-right shrink-0">
              <button
                onClick={() => setShowContent(false)}
                className="inline-block bg-secondary text-black-100 p-2 rounded-full"
              >
                <XIcon size={24} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
