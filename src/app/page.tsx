import BackgroundPattern from "@/components/background-pattern";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FullSpeedSection from "@/components/full-speed-section";
import TerminalSection from "@/components/terminal-section";

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <BackgroundPattern />
      <div className="max-w-screen-2xl m-auto p-6 md:p-16 xl:p-24">
        <HeroSection />
        <HowItWorksSection />
        <TerminalSection />
        <FullSpeedSection />
      </div>
    </main>
  );
}
