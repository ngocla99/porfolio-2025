import { TimelineWork } from "@/components/TimelineWork";

export default function Home() {
  return (
    <main className='mx-auto max-w-[696px] p-6 pb-12'>
      {/* Hero Section */}
      <section className=''>
        <div className='max-w-[500px] md:mt-12'>
          <h1 className='custom-h1'>
            LE ANH NGOC
            <span className='body-sm text-muted-foreground transition-colors hover:text-foreground text-sm mt-1'>
              &nbsp;/ @NGOCLA99
            </span>
          </h1>

          <p className='my-4 font-proto text-2xl leading-[1.25em] xs:text-2xl'>
            FULL STACK DEVELOPER <br />
            FOCUSED ON FRONTEND
          </p>
          <p className='body-lg text-balance max-w-[390px] text-[18px]'>
            With over 4 years of hands-on experience, I specialize in building modern, responsive web applications that
            feel fast, clean, and intuitive.
          </p>
          <p className='body-lg text-balance mt-6 max-w-[450px] text-[18px]'>
            I’m passionate about frontend architecture, design systems, and crafting user interfaces that don’t just
            work — they feel right.
          </p>
        </div>
        <div className='mt-8'>
          <p className='text-balance flex items-center gap-2.5 font-proto text-xs text-warning sm:gap-2 sm:text-sm'>
            <span className='mb-[0.1em] h-1.5 w-1.5 shrink-0 rounded-full bg-warning'></span>
            <span>Excited to join a new remote team.</span>
          </p>
        </div>
      </section>
      <TimelineWork className='mt-14' />
    </main>
  );
}
