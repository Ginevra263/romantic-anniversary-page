import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import MemoryGameSection from "@/components/MemoryGameSection";
import MusicFutureSection from "@/components/MusicFutureSection";
import SurpriseSection from "@/components/SurpriseSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <MemoryGameSection />
      <MusicFutureSection />
      <SurpriseSection />
      <ClosingSection />
    </div>
  );
};

export default Index;
