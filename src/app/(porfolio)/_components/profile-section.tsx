"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { Orb } from "@/components/ui/orb";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TimelineWork } from "./time-line-work";
import React from "react";
import { useRouter } from "next/navigation";

export function ProfileSection() {
  // FIXME: This is a hack to prevent white flash when the user navigates to the projects page
  const [showOrb, setShowOrb] = React.useState(true);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setShowOrb(false);
    router.push(path);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='flex flex-col items-start pt-12'
    >
      <div className='relative bio-text-shadow'>
        <div
          className={cn("hidden sm:block absolute bg-transparent top-5 right-[-300px] w-full h-full overflow-hidden")}
        >
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
            className={cn(showOrb ? "opacity-100" : "opacity-0")}
          />
        </div>
        <h1 className='custom-h1'>
          LE ANH NGOC <span className='body-sm text-body-darker! transition-colors hover:text-white!'>/ @ngocla99</span>
        </h1>
        <p className='my-4 font-proto text-xl leading-[1.35em] sm:text-2xl'>
          Frontend Specialist <br />
          with 4+ years experience.
        </p>
        <p className='body-lg text-balance max-w-[390px] text-body'>
          Building responsive applications that deliver exceptional user experiences with modern technologies and clean
          code practices.
        </p>
        <p className='body-lg text-balance mt-6 max-w-[450px] text-body'>
          I&apos;m the person who can <span className='text-white'>quickly adapt to new technologies</span> and take
          ownership of tasks to <span className='text-white'>deliver high-quality solutions</span> that exceed
          expectations. ✨
        </p>
      </div>
      <div className='mt-8'>
        <p className='text-balance flex items-center gap-2.5 font-proto text-xs text-warning sm:gap-2 sm:text-sm'>
          <span className='mb-[0.1em] h-1.5 w-1.5 shrink-0 rounded-full bg-warning'></span>
          <span>Open to exciting opportunities globally.</span>
        </p>
        <div className='flex items-center gap-3 mt-4'>
          <div className='flex gap-3'>
            <a
              href='mailto:your-email@example.com'
              className='flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-border hover:ring-2 hover:ring-accent active:scale-95 text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                <polyline points='22,6 12,13 2,6'></polyline>
              </svg>
            </a>
            <button className='flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-border hover:ring-2 hover:ring-accent active:scale-95 text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent'>
              <svg
                className='absolute'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                style={{ opacity: 1, transform: "none" }}
              >
                <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
              </svg>
            </button>
          </div>
          <p className='pl-0.5 body-sm'>
            Want to discuss opportunities? <br />
            <span className='block'>Send me an email.</span>
          </p>
        </div>
        <p className='text-balance flex items-center gap-2.5 pt-5 font-proto text-xs text-body sm:gap-2 sm:text-sm'>
          or you can{" "}
          <ButtonLink className='text-friends text-sm' href='/projects'>
            see my work
          </ButtonLink>
        </p>
      </div>
      <TimelineWork className='mt-14 w-full bio-text-shadow' onNavigate={handleNavigation} />
      <h2 className='custom-h2'>Elsewhere</h2>
      <div className='grid grid-cols-2 gap-8 md:flex md:flex-row md:flex-wrap md:gap-8'>
        <ButtonLink href='https://www.linkedin.com/in/ngocla99' target='_blank'>
          LINKEDIN
        </ButtonLink>
        <ButtonLink href='https://github.com/ngocla99' target='_blank'>
          GITHUB
        </ButtonLink>
        <ButtonLink href='https://read.cv/ngocla99' target='_blank'>
          READ.CV
        </ButtonLink>
        <ButtonLink href='https://www.facebook.com/ngocla99' target='_blank'>
          FACEBOOK
        </ButtonLink>
        <ButtonLink href='https://x.com/ngoclias_213' target='_blank'>
          TWITTER
        </ButtonLink>
        <div className='font-proto text-body'>ngocla99</div>
      </div>
    </motion.section>
  );
}
