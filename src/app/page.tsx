import HeroSection from "@/components/sections/HeroSection";
import ExecutivePositioning from "@/components/sections/ExecutivePositioning";
import CareerTimeline from "@/components/sections/CareerTimeline";
import CurrentScope from "@/components/sections/CurrentScope";
import SignatureImpact from "@/components/sections/SignatureImpact";
import Achievements from "@/components/sections/Achievements";
import LeadershipPhilosophy from "@/components/sections/LeadershipPhilosophy";
import FinalCta from "@/components/sections/FinalCta";
import ScrollLedger from "@/components/ui/ScrollLedger";

export default function Home() {
  return (
    <>
      <ScrollLedger />
      <HeroSection />
      <ExecutivePositioning />
      <CareerTimeline />
      <CurrentScope />
      <SignatureImpact />
      <Achievements />
      <LeadershipPhilosophy />
      <FinalCta />
    </>
  );
}
