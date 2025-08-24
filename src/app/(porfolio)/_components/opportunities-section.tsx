import { ButtonCopy } from "@/components/ui/button-copy";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export function OpportunitiesSection() {
  const [emailHovered, setEmailHovered] = React.useState(false);
  const [copyHovered, setCopyHovered] = React.useState(false);

  const getTextHover = () => {
    if (emailHovered) {
      return "Open your email app.";
    }

    if (copyHovered) {
      return "Copy address to your clipboard.";
    }

    return "Send me an email.";
  };

  return (
    <div className="mt-8">
      <p className="text-balance flex items-center gap-2.5 font-proto text-xs text-warning sm:gap-2 sm:text-sm">
        <span className="mb-[0.1em] h-1.5 w-1.5 shrink-0 rounded-full bg-warning"></span>
        <span>Open to exciting opportunities globally.</span>
      </p>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ngoc.leanh1999@gmail.com"
            className="flex items-center justify-center w-10 h-10 rounded-xl ring-1 ring-border hover:ring-2 hover:ring-accent active:scale-95 text-accent outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => setEmailHovered(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </motion.a>
          <ButtonCopy
            size="md"
            onMouseEnter={() => setCopyHovered(true)}
            onMouseLeave={() => setCopyHovered(false)}
            content="ngoc.leanh1999@gmail.com"
          />
        </div>
        <p className="pl-0.5 body-sm text-accent">
          Want to discuss opportunities? <br />
          <span
            className={cn(
              "block",
              (emailHovered || copyHovered) && "text-white"
            )}
          >
            {getTextHover()}
          </span>
        </p>
      </div>
      <p className="text-balance flex items-center gap-2.5 pt-5 font-proto text-xs text-body sm:gap-2 sm:text-sm">
        or you can{" "}
        <ButtonLink className="text-friends text-sm" href="/projects">
          see my work
        </ButtonLink>
      </p>
    </div>
  );
}
