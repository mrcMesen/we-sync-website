'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface BackHomeProps {
  // if true, the back home link will be shown on mobile
  mobile?: boolean;
}

export function BackHome(props: BackHomeProps) {
  const { mobile } = props;
  const path = usePathname();

  return path !== '/' ? (
    <div
      className={`justify-center md:justify-start ${
        mobile ? 'flex md:hidden' : 'hidden md:flex'
      }`}
    >
      {/* return arrow */}
      <Link href="/" className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#597e8d"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
        <span className={mobile ? 'block' : 'hidden'}>Go Back Home</span>
      </Link>
    </div>
  ) : null;
}
