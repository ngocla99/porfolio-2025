"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Timeline } from "@/components/ui-animate/timeline";

function DescriptionItem({
  logo,
  company,
  position,
  description,
  responsibilities,
  technologies,
  className,
}: {
  logo: string;
  company: string;
  position: string;
  description: string | React.ReactNode;
  responsibilities: string | React.ReactNode;
  technologies: string | React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className='flex items-center gap-2 mb-2'>
        <Image
          src={logo}
          alt={company}
          width={24}
          height={24}
          className='size-6 border border-[#dedede] rounded-md object-contain bg-white'
        />
        <h3 className='outline-none transition-all hover:text-accent focus-visible:ring-1 focus-visible:ring-accent active:scale-95'>
          {company}{" "}
          <span className='relative -ml-8 text-sm text-body-dark md:ml-0 md:text-base'>
            <span className='hidden sm:inline'>&nbsp;·&nbsp; </span> {position}
          </span>
        </h3>
      </div>
      <p className='text-sm text-body-dark'>{description}</p>
      <p className='text-pretty whitespace-pre-wrap text-sm text-body md:text-base'>{responsibilities}</p>
      <p className='text-sm text-body-dark'>{technologies}</p>
    </div>
  );
}

export function TimelineDetail({ className }: { className?: string }) {
  const data = [
    {
      title: "2023 - Present",
      content: (
        <DescriptionItem
          logo='/logo/ewoosoft.png'
          company='Ewoosoft'
          position='Full-stack Developer'
          description='Built a comprehensive dental clinic management website supporting multilingual capabilities. The platform
            tracks and manages statistics related to partners, prostheses, payments, and employees.'
          responsibilities={
            <>
              Key Achievements:
              <br />- designed and developed scalable, reusable UI components, improving feature development efficiency
              by 20 and reducing build time by 50%
              <br />- optimized large list rendering on the frontend, achieving 80-95% faster load times
              <br />- enhanced backend API performance, resulting in a 40-50% reduction in load times
              <br />- built backend API functions and endpoints, migrated databases, and resolved production issues
            </>
          }
          technologies='Technologies: ReactJs · Tailwind · Material-UI · GraphQL · NodeJs · MongoDB · Docker · Kubernetes'
        />
      ),
    },
    {
      title: "Aug 2022 - Mar 2023",
      content: (
        <DescriptionItem
          logo='/logo/viettel.png'
          company='Viettel Security'
          position='Frontend Developer'
          description='In-sourced at Viettel Security (via FPT Software), joining a team that builds a product security platform to track statistics and issue warnings for user behaviors within organizations.'
          responsibilities={
            <>
              Responsibilities:
              <br />- Solely responsible for the front-end site, developing new features and renewing all old web
              designs
              <br />- Ensured code quality by scanning libraries with SonarQube and other SCA tools
              <br />- Deployed the website to the server using GitLab CI/CD and Docker
            </>
          }
          technologies='Technologies: ReactJs · Redux-Saga · Ant Design · Styles Components · ChartJs · NodeJs · MongoDB · Elasticsearch'
        />
      ),
    },
    {
      title: "Jan 2022 - Aug 2022",
      content: (
        <DescriptionItem
          logo='/logo/fsoft.png'
          company='FPT Software'
          position='Frontend Developer'
          description='Migrated DEN system from Flex to HTML/Angular.'
          responsibilities={
            <>
              Responsibilities:
              <br />- Successfully migrated legacy Flex system to modern HTML/Angular architecture
              <br />- Created consistent and efficient UI components for the new system
              <br />- Contributed to the project&apos;s foundation and assisted team members with complex tasks
            </>
          }
          technologies='Technologies: Angular · SQL · Boostrap5 · HTML5/CSS3'
        />
      ),
    },
    {
      title: "Jun 2021 - Jan 2022",
      content: (
        <DescriptionItem
          logo='/logo/fsoft.png'
          company='FPT Software'
          position='Fresher Developer'
          description='Led two mock projects: a Shopping Cart and a Blog App. As the team leader, I assigned tasks, built the base projects, supported team members, and learned collaboratively throughout the development process.'
          responsibilities={
            <>
              Responsibilities:
              <br />- Led team of developers and assigned tasks effectively
              <br />- Built base projects and provided technical support to team members
              <br />- Enhanced teamwork abilities and gained practical leadership experience
              <br />- Developed skills in front-end web development across multiple frameworks
            </>
          }
          technologies='Technologies: Angular · ReactJS · Figma · Bootstrap5 · HTML5/CSS3'
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
