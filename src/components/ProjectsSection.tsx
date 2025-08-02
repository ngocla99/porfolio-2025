"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const projects = [
  {
    name: "ENS Data",
    description: "Free public API to look up ENS records, avatars, and Farcaster profiles for an Ethereum wallet.",
    stats: "193.2M successful lookups",
  },
  {
    name: "Link Expander",
    description:
      "Telegram bot that expands Twitter, Instagram, TikTok, Dribbble, Reddit, Spotify, and HN links with inline video inside groups and channels.",
    stats: "215,000+ monthly active users",
  },
  {
    name: "Pixeldrop",
    description:
      "Redact sensitive information from your photos by pixelating them. Auto Face Detection. Auto Text Detection.",
    stats: "Free on the App Store",
  },
  {
    name: "metadata.vision",
    description: "Free public API for grabbing OG metadata from any URL as JSON.",
    stats: "1.8M URLs served",
  },
];

export function ProjectsSection({ className }: { className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("py-8", className)}
    >
      <h2 className='custom-h2 mb-6'>Projects</h2>
      <div className='grid gap-4 md:grid-cols-2'>
        {projects.map((project) => (
          <Card key={project.name} className='p-4 flex flex-col gap-2'>
            <div className='font-bold text-lg'>{project.name}</div>
            <div className='text-muted-foreground text-sm'>{project.description}</div>
            <div className='text-xs mt-2 text-primary font-mono'>{project.stats}</div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
