"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ButtonLink } from "../ui/button-link";
import { cn } from "@/lib/utils";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then((mod) => ({ default: mod.Player })), {
  ssr: false,
});

export function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("mx-auto flex max-w-[696px] items-center justify-between gap-4 p-6 md:mt-12", className)}>
      <Link
        className='relative -left-2 inline-block origin-center text-4xl outline-none transition-all hover:-rotate-3 focus-visible:rounded-xl focus-visible:ring-2 focus-visible:ring-accent active:scale-95'
        href='/'
      >
        <Player autoplay loop src='/lotties/fire.json' className='absolute top-[-34px] size-16 hue-rotate-110' />
      </Link>
      <ul className='flex gap-6'>
        <li>
          <ButtonLink asChild>
            <Link href='/journal'>Journal</Link>
          </ButtonLink>
        </li>
        <li>
          <ButtonLink asChild>
            <Link href='/projects'>Projects</Link>
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
}
