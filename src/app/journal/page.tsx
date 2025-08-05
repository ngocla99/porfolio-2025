import { Navbar } from "@/components/layouts/navbar";
import { LetterGlitch } from "@/components/ui-animate/letter-glitch";
import { Card } from "@/components/ui/card";

export default function Journal() {
  return (
    <>
      <Navbar className='max-w-[696px]' />
      <main className='mx-auto max-w-[696px] p-6 pb-12'>
        <div className='mb-2 flex items-center justify-between'>
          <h1 className='custom-h1 text-white!'>Journal</h1>
        </div>
        <p className='body-base mb-8 text-body-dark'>
          Thoughts, insights, and learnings from my journey as a developer.
        </p>

        <div className='flex flex-col items-center justify-center'>
          <Card className='p-5 w-full border-dashed border-2 border-border bg-transparent relative'>
            <div className='text-center text-body-dark absolute top-0 left-0 w-full h-full'>
              <div className='text-2xl font-proto font-bold text-white top-1/2 absolute z-10 right-1/2 translate-x-1/2 -translate-y-1/2'>
                Coming Soon
              </div>
            </div>
            <LetterGlitch glitchSpeed={50} centerVignette={true} outerVignette={false} smooth={true} />
          </Card>
        </div>
      </main>
    </>
  );
}
