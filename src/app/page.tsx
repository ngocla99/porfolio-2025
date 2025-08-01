import { TimelineWork } from "@/components/TimelineWork";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { JournalSection } from "@/components/JournalSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className='mx-auto max-w-[696px] p-6 pb-12'>
      <ProfileSection />
      <TimelineWork className='mt-14' />
      <ProjectsSection />
      <JournalSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
}
