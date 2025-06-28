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
    imgUrl: "/logo/ewoosoft.webp",
    link: "https://www.ewoosoft.com/",
    isCurrent: true,
  },
  {
    id: "shipped",
    title: "Viettel Security",
    period: "2022 - 2023",
    imgUrl: "/logo/viettel.webp",
    link: "https://viettelcybersecurity.com/",
  },
  {
    id: "delivery",
    title: "FPT Software",
    period: "2021 - 2022",
    imgUrl: "/logo/fsoft.webp",
    link: "https://fptsoftware.com/",
  },
];

export function TimelineWork({ className }: { className?: string }) {
  return (
    <Timeline orientation='horizontal' className={cn("min-h-40", className)}>
      {timelineData.map((item) => (
        <TimelineItem key={item.id} className='flex-1'>
          <TimelineSeparator className='relative'>
            <TimelineDot
              className={item.isCurrent ? "text-accent" : ""}
              variant={item.isCurrent ? "default" : "outline"}
            />
            {item.isCurrent && (
              <div
                className='absolute size-4 animate-ping rounded-full bg-accent opacity-25'
                style={{ animationDuration: "3s" }}
              />
            )}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className='space-y-2'>
            <TimelineTitle className='flex items-center gap-2'>
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={48}
                height={48}
                className='size-12 border border-[#dedede] rounded-md object-contain'
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
        href='https://www.ewoosoft.com/'
        className='h-full whitespace-nowrap text-right font-proto text-sm text-body-dark outline-none transition-all hover:text-accent focus:text-accent focus-visible:rounded-lg focus-visible:ring-1 focus-visible:ring-accent md:right-0 md:active:scale-95'
      >
        All →
      </Link>
    </Timeline>
  );
}
