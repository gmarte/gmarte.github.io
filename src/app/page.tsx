import HeroSection from "@/components/sections/HeroSection";
import ExecutivePositioning from "@/components/sections/ExecutivePositioning";
import CareerTimeline from "@/components/sections/CareerTimeline";
import CurrentScope from "@/components/sections/CurrentScope";
import SignatureImpact from "@/components/sections/SignatureImpact";
import Achievements from "@/components/sections/Achievements";
import LeadershipPhilosophy from "@/components/sections/LeadershipPhilosophy";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <ExecutivePositioning />
      <CareerTimeline />
      <CurrentScope />
      <SignatureImpact />
      <Achievements />
      <LeadershipPhilosophy />
    </div>
  );
}
