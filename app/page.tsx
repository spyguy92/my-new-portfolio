"use client";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
// import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const RecentProjects = dynamic(() => import("../components/RecentProjects"), {
  ssr: false,
});

const Grid = dynamic(() => import("../components/Grid"), {
  ssr: false,
});

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip
    sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
