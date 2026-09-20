"use client";

import Hero from "@/components/Hero";
import CaseFilesPreview from "@/components/CaseFilesPreview";
import ToolCabinet from "@/components/ToolCabinet";
import WorkLog from "@/components/WorkLog";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-[#FAF7EE]">
      <Hero />
      <CaseFilesPreview limit={6} showViewAll={true} showHeader={true} />
      <ToolCabinet />
      <WorkLog />
      <About />
      <Contact />
    </div>
  );
}
