"use client";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface TimelineItemData {
  id: string;
  title: string;
  period: string;
  link: string;
  imgUrl: string;
  isCurrent?: boolean;
}

const timelineData: TimelineItemData[] = [
  {
    id: "ewoosoft",
    title: "Ewoosoft Viet",
    period: "2023 - NOW",
    imgUrl: "/logo/ewoosoft.png",
    link: "https://www.ewoosoft.com/",
    isCurrent: true,
  },
  {
    id: "shipped",
    title: "Viettel Security",
    period: "2022 - 2023",
    imgUrl: "/logo/viettel.png",
    link: "https://viettelcybersecurity.com/",
  },
  {
    id: "delivery",
    title: "FPT Software",
    period: "2021 - 2022",
    imgUrl: "/logo/fsoft.png",
    link: "https://fptsoftware.com/",
  },
];

export function TimelineWork({ className }: { className?: string }) {
  return (
    <Timeline orientation='horizontal' className={cn("min-h-40 relative", className)}>
      {timelineData.map((item, index) => (
        <TimelineItem key={item.id} className='flex-1'>
          <TimelineSeparator className='relative'>
            <div className='relative'>
              {index !== 0 && (
                <div className='absolute bottom-0 left-3 h-full w-5 bg-gradient-to-r from-black to-transparent' />
              )}
              <div className='absolute bottom-0 right-3 h-full w-5 bg-gradient-to-l from-black to-transparent' />
              <TimelineDot
                className={item.isCurrent ? "text-accent" : ""}
                variant={item.isCurrent ? "default" : "outline"}
              />
              {item.isCurrent && (
                <div
                  className='top-0 absolute size-4 animate-ping rounded-full bg-accent opacity-25'
                  style={{ animationDuration: "3s" }}
                />
              )}
            </div>
            <TimelineConnector
              className={cn(
                "mx-0",
                index === 0 && "translate-x-[-2px] translate-y-[-0.5px] bg-gradient-to-r from-accent to-transparent"
              )}
            />
          </TimelineSeparator>
          <TimelineContent className='space-y-3'>
            <TimelineTitle className='flex items-center gap-3'>
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={36}
                height={36}
                className='size-9 border border-[#dedede] rounded-md object-contain bg-white'
              />
              <Link
                href={item.link}
                className='text-sm outline-none transition-all hover:text-accent focus-visible:ring-1 focus-visible:ring-accent active:scale-95 sm:text-[15px]'
                target='_blank'
              >
                {item.title}
              </Link>
            </TimelineTitle>
            <TimelineDescription className='custom-h2 mb-0 whitespace-nowrap font-proto text-xs sm:text-sm'>
              {item.period}
            </TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
      <Link
        href='/projects'
        className='-right-6 h-full bg-gradient-to-r from-transparent to-black to-80% pl-24 pr-4 md:pl-12 md:pr-0 absolute -top-1 z-20 translate-y-[0.5px] whitespace-nowrap text-right font-proto text-sm text-body-dark outline-none transition-all hover:text-white focus:text-accent focus-visible:rounded-lg focus-visible:ring-1 focus-visible:ring-accent md:right-0 md:active:scale-95'
      >
        All →
      </Link>
    </Timeline>
  );
}
