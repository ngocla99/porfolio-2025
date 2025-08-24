"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { Orb } from "@/components/ui/orb";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { TimelineWork } from "./time-line-work";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { OpportunitiesSection } from "./opportunities-section";

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
      <OpportunitiesSection />
      <TimelineWork className='mt-14 w-full bio-text-shadow' onNavigate={handleNavigation} />
      <h2 className='custom-h2'>Elsewhere</h2>
      <div className='grid grid-cols-2 gap-8 md:flex md:flex-row md:flex-wrap md:gap-8'>
        <ButtonLink href='https://www.linkedin.com/in/ngocla99' target='_blank'>
          Linkedin
        </ButtonLink>
        <ButtonLink href='https://github.com/ngocla99' target='_blank'>
          Github
        </ButtonLink>
        <ButtonLink href='/pdf/resume.pdf' target='_blank'>
          Read.CV
        </ButtonLink>
        <ButtonLink href='https://www.facebook.com/ngocla99' target='_blank'>
          Facebook
        </ButtonLink>
        <ButtonLink href='https://x.com/ngoclias_213' target='_blank'>
          Twitter
        </ButtonLink>
        <Link
          className='font-proto text-body'
          href='https://coconut-challenge-804.notion.site/c20324b9c75e48b7812fbea7ac9f413e?v=957f901bab2f4d848a2cc698ac3fc115&pvs=74'
          target='_blank'
        >
          ngocla99
        </Link>
      </div>
    </motion.section>
  );
}
