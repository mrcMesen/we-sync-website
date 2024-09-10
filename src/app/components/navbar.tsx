import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {};

export function Navbar(props: NavbarProps) {
  return (
    <div className="fixed bottom-0 left-0 lg:static z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex ">
      <nav className="flex justify-center items-center md:justify-start gap-4 md:gap-8 pt-12 md:pt-0">
        <Link href="/terms-and-conditions">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="flex md:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://isnovum.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/brand/novum-logo.png"
            alt="Vercel Logo"
            className=""
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}
