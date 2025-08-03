"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const posts = [
  { title: "How to target Safari with a CSS @supports media query", date: "Jun 9, 2024" },
  { title: "An expensive disappointment: Razer Pro Click V2 Vertical", date: "May 26, 2024" },
  { title: "Building a rich link preview React Server Component", date: "Jan 9, 2024" },
  { title: "Displaying the weekly downloads count of your NPM package on your Next.js website", date: "Jun 2, 2024" },
];

export function JournalSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='py-8'
    >
      <h2 className='custom-h2 mb-6'>Journal</h2>
      <div className='flex flex-col gap-4'>
        {posts.map((post) => (
          <Card key={post.title} className='p-4 flex flex-col gap-1'>
            <div className='font-medium text-base'>{post.title}</div>
            <div className='text-xs text-muted-foreground'>{post.date}</div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
