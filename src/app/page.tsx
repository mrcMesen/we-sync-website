import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-around md:min-h-[70vh]">
      <div className="mb-20 md:mt-20 md:mb-0 flex place-items-center">
        <Image
          className="relative"
          src="/brand/we-sync-logo.png"
          alt="We Sync Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 flex flex-wrap justify-around text-center gap-4 lg:mb-0 md:pb-[5%]">
        <div>
          <h2 className="mb-1 md:mb-3 text-2xl font-semibold">Task tracking</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create tasks, track progress, and collaborate with others.
          </p>
        </div>

        <div>
          <h2 className="mb-1 md:mb-3 text-2xl font-semibold">Shopping list</h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create shopping lists and share them with your family and friends.
          </p>
        </div>

        <div>
          <h2 className="mb-1 md:mb-3 text-2xl font-semibold">
            Always in Sync
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Tasks and shopping lists are shared with everyone in real-time
          </p>
        </div>
      </div>
    </section>
  );
}
