"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import ToolCabinet from "@/components/ToolCabinet";
import CaseFilesPreview from "@/components/CaseFilesPreview";
import WorkLog from "@/components/WorkLog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background">
      <section id="workshop">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="tools">
        <ToolCabinet />
      </section>
      <section id="case-files">
        <CaseFilesPreview limit={3} showViewAll={true} showHeader={true} />
      </section>
      <WorkLog />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
