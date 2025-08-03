"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full' ref={containerRef}>
      <div ref={ref} className='relative mx-auto pb-20'>
        {data.map((item, index) => (
          <div key={index} className='grid grid-cols-3 justify-start pt-2.5 md:pt-10 md:gap-6'>
            <div className='sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full'>
              <div className='size-5 absolute rounded-full bg-black flex items-center justify-center'>
                <div className='size-2.5 rounded-full border border-body-darker' />
              </div>
              <h3 className='hidden md:block ml-7 custom-h2 text-sm font-proto leading-5! mb-0!'>{item.title}</h3>
            </div>

            <div className='relative col-span-2'>
              <h3 className='md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500'>
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className='absolute md:left-[9px] left-[9px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-accent to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
