"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight, DollarSign } from "lucide-react";
import Image from "next/image";
import DataScreenshot from "./data-screenshot";
import PlaygroundScreenshot from "./playground-screenshot";
import { DM_Mono } from "next/font/google";

import playgroundScreenshot from "../../public/Playground.png";
import dataScreenshot from "../../public/Data.png";
import { useEffect, useState } from "react";

const dmMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm create mainframe");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="relative mt-20 xl:mt-8 md:mb-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 text-center w-full tracking-tight">
          Centralize your <span className="text-emerald-500">data</span>
        </h1>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-center w-full tracking-tight">
          Build <span className="text-emerald-500">apps</span> with a unified
          API
        </h1>
        <p className="text-xl mb-8 text-center lg:w-1/2">
          Mainframe syncs with other services and lets you build apps with their
          data. No authentication setup required.
        </p>
        <Link href="https://app.mainframe.so">
          <Button size="lg">
            Try it out <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
        <div className="flex w-full justify-center items-center mt-6">
          <p className="basis-1/4 text-right">Or run</p>
          <Button
            onClick={handleCopy}
            className={`${dmMono.className} ml-2`}
            size="sm"
            variant="secondary"
          >
            <DollarSign className="text-slate-500 w-4 h-4 mr-1" />
            <span className="text-emerald-500">npm</span>&nbsp;create mainframe
          </Button>
          <p className="basis-1/4 text-xs ml-2 text-muted-foreground">{`${
            copied ? "Copied" : ""
          }`}</p>
        </div>
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
