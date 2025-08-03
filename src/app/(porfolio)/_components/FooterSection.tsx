"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t mt-12 flex flex-col items-center gap-2"
    >
      <div className="flex gap-3 mb-2">
        <Button asChild variant="ghost" size="sm">
          <a href="https://twitter.com/pugson" target="_blank" rel="noopener noreferrer">Twitter</a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href="https://github.com/pugson" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <a href="mailto:wojtek@wojtek.im">Email</a>
        </Button>
      </div>
      <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} Wojtek Witkowski</span>
    </motion.footer>
  );
}