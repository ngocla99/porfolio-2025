// import { FooterSection } from "@/components/FooterSection";
// import { JournalSection } from "@/components/JournalSection";
// import { NewsletterSection } from "@/components/NewsletterSection";
import { ProfileSection } from "@/components/ProfileSection";
// import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className='mx-auto max-w-[696px] p-6 pb-12'>
      <ProfileSection />
      {/* <ProjectsSection className='mt-16' /> */}
      {/* <JournalSection />
      <NewsletterSection />
      <FooterSection /> */}
    </main>
  );
}
