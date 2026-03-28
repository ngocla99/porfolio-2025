import { Navbar } from "@/components/layouts/navbar";
import { OpportunitiesSection } from "@/app/(porfolio)/_components/opportunities-section";
import { TimelineDetail } from "./_components/time-line-detail";

export default function Projects() {
  return (
    <>
      <Navbar className="max-w-[696px]" />
      <main className="mx-auto max-w-[696px] p-6 pb-12">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="custom-h1 text-white!">Work Experience</h1>
        </div>
        <p className="body-base mb-2 text-body-dark">
          What I&apos;ve been up to in the last 5+ years.
        </p>
        <TimelineDetail className="" />
        <OpportunitiesSection hideFooterLink />
      </main>
    </>
  );
}
