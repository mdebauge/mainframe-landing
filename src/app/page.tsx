import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Step from "@/components/step";
import Link from "next/link";
import BackgroundPattern from "@/components/background-pattern";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import FullSpeedSection from "@/components/full-speed-section";

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <BackgroundPattern />
      <div className="max-w-screen-2xl m-auto p-6 md:p-16 xl:p-24">
        <HeroSection />
        <HowItWorksSection />
        <FullSpeedSection />
      </div>
    </main>
  );
}
