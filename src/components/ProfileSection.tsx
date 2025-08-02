"use client";

import { motion } from "framer-motion";
import { TimelineWork } from "./TimelineWork";
import { ButtonLink } from "./ui/button-link";
import Orb from "./ui/orb";

export function ProfileSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex flex-col items-start pt-12'
    >
      <div className='relative'>
        <div className='hidden lg:block absolute top-5 right-[-285px] w-full h-full'>
          <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
        </div>
        <h1 className='custom-h1'>
          LE ANH NGOC <span className='body-sm text-body-darker transition-colors hover:text-white'>/ @ngocla99</span>
        </h1>
        <p className='my-4 font-proto text-xl leading-[1.25em] xs:text-2xl'>
          Staff UI Engineer <br />
          focused on interaction design.
        </p>
        <p className='body-lg text-balance max-w-[390px] text-body'>
          Building fast apps that feel like a physical extension of your mind with considerate motion design for fluid
          interfaces.
        </p>
        <p className='body-lg text-balance mt-6 max-w-[450px] text-body'>
          I’m the person who can <span className='text-white'>bridge the gap between design and engineering</span> to
          give your product that extra attention to detail to{" "}
          <span className='text-white'>stand out from competitors. ✨</span>
        </p>
      </div>
      <div className='mt-8'>
        <p className='text-balance flex items-center gap-2.5 font-proto text-xs text-warning sm:gap-2 sm:text-sm'>
          <span className='mb-[0.1em] h-1.5 w-1.5 shrink-0 rounded-full bg-warning'></span>
          <span>Currently not taking on any new work.</span>
        </p>
        <div className='flex items-center gap-3 mt-4'>
          <div className='flex gap-3'>
            <a
              href='mailto:website@wojtek.im'
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
                stroke-linecap='round'
                stroke-linejoin='round'
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
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                style={{ opacity: 1, transform: "none" }}
              >
                <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
              </svg>
            </button>
          </div>
          <p className='pl-0.5 body-sm'>
            Want to chat either way? <br />
            <span className='block'>Send me an email.</span>
          </p>
        </div>
        <p className='text-balance flex items-center gap-2.5 pt-5 font-proto text-xs text-body sm:gap-2 sm:text-sm'>
          or you can{" "}
          <a className='text-link-hover text-friends' href='/friends'>
            hire my friends
          </a>
        </p>
      </div>
      <TimelineWork className='mt-14' />
      <h2 className='custom-h2'>Elsewhere</h2>
      <div className='grid grid-cols-2 gap-8 md:flex md:flex-row md:flex-wrap md:gap-8'>
        <ButtonLink>LINKEDIN</ButtonLink>
        <ButtonLink>GITHUB</ButtonLink>
        <ButtonLink>TWITTER</ButtonLink>
        <ButtonLink>READ.CV</ButtonLink>
        <ButtonLink>FACEBOOK</ButtonLink>
      </div>
    </motion.section>
  );
}
