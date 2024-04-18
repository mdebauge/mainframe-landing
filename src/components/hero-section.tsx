import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import DataScreenshot from "./data-screenshot";
import PlaygroundScreenshot from "./playground-screenshot";

import playgroundScreenshot from "../../public/Playground.png";
import dataScreenshot from "../../public/Data.png";

export default function HeroSection() {
  return (
    <section className="relative mt-20 xl:mt-8 md:mb-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 text-center w-full tracking-tight">
          Build customized apps
        </h1>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-center w-full tracking-tight">
          more <span className="text-emerald-500">efficiently</span>
        </h1>
        <p className="text-xl mb-8 text-center lg:w-1/2">
          Mainframe helps you seamlessly access, transform, and deploy data from
          a single, unified source to accelerate your development.
        </p>
        <Link href="https://app.mainframe.so">
          <Button size="lg">
            Try it out <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      <div className="sm:relative sm:h-[44vw] w-full my-24 sm:mt-32">
        <Image
          className="sm:hidden mb-8 drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]"
          src={dataScreenshot}
          alt="Data screenshot"
        />
        <Image
          className="sm:hidden drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]"
          src={playgroundScreenshot}
          alt="Playground screenshot"
        />
        <DataScreenshot />
        <PlaygroundScreenshot />
      </div>
    </section>
  );
}
