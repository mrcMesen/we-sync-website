import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <nav className="inline-flex gap-4 md:gap-8">
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/privacy-policy">Contact</Link>
        </nav>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
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

      <div className="relative z-[-1] flex place-items-center pb-[6%]">
        <Image
          className="relative"
          src="/brand/we-sync-logo.png"
          alt="We Sync Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 flex flex-wrap justify-around text-center lg:mb-0 pb-[5%]">
        <div>
          <h2 className="mb-3 text-2xl font-semibold">Task tracking</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create tasks, track progress, and collaborate with others.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Shopping list</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create shopping lists and share them with your family and friends.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-2xl font-semibold">Always in Sync</h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Tasks and shopping lists are shared with everyone in real-time
          </p>
        </div>
      </div>
    </main>
  );
}
