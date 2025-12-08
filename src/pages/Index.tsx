import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import MemoryGameSection from "@/components/MemoryGameSection";
import PlaylistSection from "@/components/PlaylistSection";
import SurpriseSection from "@/components/SurpriseSection";
import ClosingSection from "@/components/ClosingSection";

import AppBar from "@/components/AppBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AppBar />
      <HeroSection />
      <TimelineSection />
      <MemoryGameSection />
      <PlaylistSection />
      <SurpriseSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
