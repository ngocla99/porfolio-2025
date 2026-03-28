"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Timeline } from "@/components/ui-animate/timeline";
import Link from "next/link";

function DescriptionItem({
  logo,
  company,
  position,
  description,
  responsibilities,
  technologies,
  className,
  link,
}: {
  logo: string;
  company: string;
  position: string;
  description: string | React.ReactNode;
  responsibilities: string | React.ReactNode;
  technologies: string | React.ReactNode;
  className?: string;
  link: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-center gap-2 mb-2">
        <Image
          src={logo}
          alt={company}
          width={24}
          height={24}
          className="size-6 border border-[#dedede] rounded-md object-contain bg-white"
        />
        <Link
          href={link}
          className="outline-none cursor-pointer transition-all hover:text-accent focus-visible:ring-1 focus-visible:ring-accent active:scale-95"
          target="_blank"
        >
          {company}{" "}
          <span className="text-sm text-body-dark md:ml-0 md:text-base">
            <span className="">&nbsp;·&nbsp; </span> {position}
          </span>
        </Link>
      </div>
      <p className="text-sm text-body-dark">{description}</p>
      <p className="text-pretty whitespace-pre-wrap text-sm text-body md:text-base">
        {responsibilities}
      </p>
      <p className="text-sm text-body-dark">{technologies}</p>
    </div>
  );
}

export function TimelineDetail({ className }: { className?: string }) {
  const data = [
    {
      title: "Dec 2025 - Present",
      content: (
        <DescriptionItem
          logo="/logo/ewoosoft.png"
          company="Ewoosoft"
          position="Full-stack Developer"
          description="Group Purchase Campaign Platform: An e-commerce solution enabling users to form buying groups to unlock bulk-pricing discounts and manage integrated promotional workflows."
          responsibilities={
            <>
              Frontend:
              <br />- <strong>Architected</strong> a scalable <strong>pnpm monorepo</strong> with <strong>Turborepo</strong> managing <strong>2 Next.js applications</strong> and <strong>4 shared packages</strong>, enabling maximum <strong>code reuse</strong> and a consistent developer experience.
              <br />- Built a comprehensive Design System with <strong>45+ reusable React components</strong> using <strong>Compound Component Pattern</strong> and Class Variance Authority (CVA), adopted across both Web and Admin platforms.
              <br />- Early adopter of React 19 with <strong>React Compiler</strong> for <strong>automatic performance optimization</strong>, eliminating manual memoization across the codebase.
              <br />- Built a multi-layered auth system: <strong>Next.js middleware</strong> for route protection, and an innovative <strong>AuthGuard component</strong> with intercept/hide modes for UI-level access control.
              <br />- Established a high-standard Code Quality Pipeline using Biome (replacing ESLint + Prettier), Commitlint with Jira integration, Husky hooks, and Playwright E2E tests.
            </>
          }
          technologies="Technologies: Next.js · Tailwind · Shadcn · Tanstack Query · Zustand · Nuqs · NestJS · PostgreSQL"
          link="https://www.ewoosoft.com/"
        />
      ),
    },
    {
      title: "Mar 2023 - Dec 2025",
      content: (
        <DescriptionItem
          logo="/logo/ewoosoft.png"
          company="Ewoosoft"
          position="Full-stack Developer"
          description="Dental Clinic Management System: A multilingual platform for tracking partner relations, prosthesis orders, payments, and employee performance statistics."
          responsibilities={
            <>
              Frontend:
              <br />- <strong>Architected</strong> and developed <strong>scalable</strong> reusable UI components, forms, utility functions, router, and themes, leading to a <strong>20% reduction</strong> in feature development time and a <strong>50% decrease</strong> in build time.
              <br />- <strong>Optimized rendering</strong> in large list frontend, achieving a <strong>80-95% reduction</strong> in load time.
              <br />- Migrated project from <strong>Create React App (CRA)</strong> to <strong>Vite</strong> and upgraded <strong>Node.js from v16 to v20</strong>, cutting local development startup time from <strong>1m30s to ~1.2s</strong> and production build time by <strong>5x</strong>.
              <br />- Removed over <strong>1,000 unused files</strong>, <strong>50 dependencies</strong> using Knip, significantly reducing code maintenance overhead.
              <br />- Applied Apollo&apos;s <strong>cache-and-network</strong> policy, grouped GraphQL queries, and <strong>optimistic updates</strong> to improve data-fetching efficiency on the frontend.
              <br />- Regularly reviewed code and <strong>supported junior developers</strong>, ensuring code quality, consistency, and best practices across the team.
              <br />- <strong>Mentored and guided 2 team members</strong> in initiating a <strong>new mobile-first web project</strong> using modern technologies and best practices.
              <br />- Resolved <strong>complex</strong> UI challenges related to printing data.
              <br />
              <br />Backend:
              <br />- Refactored and optimized backend statistics APIs by replacing JavaScript-based processing with MongoDB aggregations, decreasing response time from <strong>3–4 minutes to 2–3 seconds</strong>.
              <br />- Implemented targeted indexing strategies in the backend to optimize API performance, achieving a <strong>40–50% reduction</strong> in response times.
              <br />- Implemented feature flag system to selectively enable features for specific users, improving testing and rollout flexibility.
              <br />- Developed backend API functions and endpoints, migrated database, and resolved production issues.
            </>
          }
          technologies="Technologies: ReactJs · Tailwind · Shadcn · Material UI · CKEditor · ApexCharts · use-Intl · Apollo · NodeJs · MongoDB · Docker · Kubernetes"
          link="https://www.ewoosoft.com/"
        />
      ),
    },
    {
      title: "Aug 2022 - Mar 2023",
      content: (
        <DescriptionItem
          logo="/logo/viettel.png"
          company="Viettel Security"
          position="Frontend Developer"
          description="In-sourced at Viettel Security (via FPT Software): Contributed to a product security platform tracking statistics and issuing alerts for organizational user behaviors."
          responsibilities={
            <>
              Responsibilities:
              <br />- <strong>Developed &amp; implemented all frontend features</strong> in collaboration with business analysts and designers.
              <br />- <strong>Created reusable components, hooks, and functions</strong>, ensuring modular and maintainable code.
              <br />- Ensured code quality by scanning libraries with SonarQube.
              <br />- <strong>Automated CI/CD pipeline</strong> using GitLab CI/CD and deployed with Docker.
            </>
          }
          technologies="Technologies: ReactJs · Redux-Saga · Ant Design · Styled Components · ChartJs · NodeJs · MongoDb · Elasticsearch · Docker"
          link="https://viettelcybersecurity.com/"
        />
      ),
    },
    {
      title: "Jan 2022 - Aug 2022",
      content: (
        <DescriptionItem
          logo="/logo/fsoft.png"
          company="FPT Software"
          position="Frontend Developer"
          description="Migrated DEN system from Flex to HTML/Angular."
          responsibilities={
            <>
              Responsibilities:
              <br />- Successfully migrated legacy Flex system to modern HTML/Angular architecture
              <br />- Created consistent and efficient UI components for the new system
              <br />- Contributed to the project&apos;s foundation and assisted team members with
              complex tasks
            </>
          }
          technologies="Technologies: Angular · SQL · Boostrap5 · HTML5/CSS3"
          link="https://fptsoftware.com/"
        />
      ),
    },
    {
      title: "Jun 2021 - Jan 2022",
      content: (
        <DescriptionItem
          logo="/logo/fsoft.png"
          company="FPT Software"
          position="Fresher Developer"
          description="Led two mock projects: a Shopping Cart and a Blog App. As the team leader, I assigned tasks, built the base projects, supported team members, and learned collaboratively throughout the development process."
          responsibilities={
            <>
              Responsibilities:
              <br />- Led team of developers and assigned tasks effectively
              <br />- Built base projects and provided technical support to team members
              <br />- Enhanced teamwork abilities and gained practical leadership experience
              <br />- Developed skills in front-end web development across multiple frameworks
            </>
          }
          technologies="Technologies: Angular · ReactJS · Figma · Bootstrap5 · HTML5/CSS3"
          link="https://fptsoftware.com/"
        />
      ),
    },
  ];
  return (
    <div className={cn("relative w-full", className)}>
      <Timeline data={data} />
    </div>
  );
}
