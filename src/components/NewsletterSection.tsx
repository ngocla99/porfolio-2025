"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='py-8'
    >
      <h2 className='text-2xl font-semibold mb-4'>Newsletter</h2>
      <p className='mb-4 text-muted-foreground'>
        Get notified when I write something new or launch a new project right into your inbox.
      </p>
      <form className='flex gap-2 max-w-md' onSubmit={(e) => e.preventDefault()}>
        <Input
          type='email'
          placeholder='your@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='flex-1'
        />
        <Button type='submit'>Subscribe</Button>
      </form>
    </motion.section>
  );
}
