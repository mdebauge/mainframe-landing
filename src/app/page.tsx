"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Step from "@/components/step";

import dataScreen from "../../public/Data.png";
import playgroundScreen from "../../public/Playground.png";
import monitor from "../../public/mainframe-monitor.svg";
import connectData from "../../public/connect-data.png";
import database from "../../public/database.png";
import api from "../../public/api.png";
import notionLogo from "../../public/notion-logo.png";
import googleCalendarLogo from "../../public/google-calendar-logo.png";
import githubLogo from "../../public/github-logo.png";
import posthogLogo from "../../public/posthog-logo.png";
import pelotonLogo from "../../public/peloton-logo.jpg";
import togglLogo from "../../public/toggl-logo.png";
import ouraLogo from "../../public/oura-logo.png";
import zoteroLogo from "../../public/zotero-logo.svg";
import Link from "next/link";

type BlobProps = {
  delay?: string;
};

function Blob({ delay }: BlobProps) {
  return (
    <div
      className={`absolute top-1/2 left-1/2 w-72 md:w-[24rem] xl:w-[32rem] h-72 md:h-[24rem] xl:h-[32rem] bg-cyan-500 opacity-25 rounded-full filter blur-2xl animate-blob ${delay}`}
    ></div>
  );
}

type OrbProps = {
  image: StaticImageData;
  position: string;
};

function Orb({ image, position }: OrbProps) {
  return (
    <li
      className={`absolute w-[4.5rem] h-[4.5rem] aspect-square rounded-full bg-white ${position}`}
    >
      <div className="grid items-center w-full h-full bg-white rounded-full overflow-hidden p-3 border-2 border-black drop-shadow-brutalist animate-hold-position">
        <Image src={image} alt="Datasource logo" />
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="p-6 md:p-16 xl:p-24 bg-background overflow-hidden">
      <div className="max-w-screen-2xl m-auto">
        <section className="mt-20 xl:mt-8 md:mb-24">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-2 text-center w-full tracking-tight">
              Build customized apps
            </h1>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-center w-full tracking-tight">
              more <span className="text-emerald-500">efficiently</span>
            </h1>
            <p className="text-xl mb-8 text-center w-1/2">
              Seamlessly access, transform, and deploy data from a single,
              unified source to accelerate your development.
            </p>
            <Link href="https://app.mainframe.so">
              <Button size="lg">Try it out</Button>
            </Link>
          </div>

          <div className="relative h-[45vw] w-full mt-28">
            <div className="absolute w-9/12 -rotate-[5deg] -left-[5%] drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]">
              <Image src={dataScreen} alt="Data screenshot" />
            </div>
            <div className="absolute w-9/12 rotate-[9deg] -right-[8%] drop-shadow-[8px_8px_25px_rgba(0,0,0,0.06)]">
              <Image src={playgroundScreen} alt="Playground screenshot" />
            </div>
          </div>
        </section>
        <section className="mb-20">
          <h2 className="text-4xl text-center font-semibold mb-2">
            How it works
          </h2>
          <p className="text-lg text-center">
            Learn how easy it is to connect your data and start building your
            app within minutes
          </p>
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-24 w-full mt-10">
            <Step
              image={connectData}
              header="Connect your data"
              blurb="Easily connect and bring in data from multiple sources."
            />
            <svg
              className="fill-primary mt-24 hidden md:block"
              width="150"
              height="46"
              viewBox="0 0 106 46"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 20C1.34315 20 0 21.3431 0 23C0 24.6569 1.34315 26 3 26V20ZM105.121 25.1213C106.293 23.9497 106.293 22.0503 105.121 20.8787L86.0294 1.7868C84.8579 0.615223 82.9584 0.615223 81.7868 1.7868C80.6152 2.95837 80.6152 4.85786 81.7868 6.02944L98.7574 23L81.7868 39.9706C80.6152 41.1421 80.6152 43.0416 81.7868 44.2132C82.9584 45.3848 84.8579 45.3848 86.0294 44.2132L105.121 25.1213ZM3 26H103V20H3V26Z" />
            </svg>

            <Step
              image={database}
              header="Assemble customized databases"
              blurb="View, transform, and create databases with your combined data."
            />
            <svg
              className="fill-primary mt-24 hidden md:block"
              width="150"
              height="46"
              viewBox="0 0 106 46"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 20C1.34315 20 0 21.3431 0 23C0 24.6569 1.34315 26 3 26V20ZM105.121 25.1213C106.293 23.9497 106.293 22.0503 105.121 20.8787L86.0294 1.7868C84.8579 0.615223 82.9584 0.615223 81.7868 1.7868C80.6152 2.95837 80.6152 4.85786 81.7868 6.02944L98.7574 23L81.7868 39.9706C80.6152 41.1421 80.6152 43.0416 81.7868 44.2132C82.9584 45.3848 84.8579 45.3848 86.0294 44.2132L105.121 25.1213ZM3 26H103V20H3V26Z" />
            </svg>
            <Step
              image={api}
              header="Build your app"
              blurb="Our API and playground make it quick and easy to immediately start building your next app or custom component."
            />
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:h-[65vh] mt-20 xl:mt-0 md:mb-24 gap-x-12">
          <div className="md:basis-2/5 flex flex-col justify-center items-start">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-center md:text-left w-full">
              Simplify your
              <br />
              data ecosystem
            </h1>
            <p className="text-xl mb-6 text-center md:text-left w-full">
              Connect and transform your data from any app or data source. Build
              apps with all your data in one tool.
            </p>
            <div className="flex gap-x-2 gap-y-4 flex-col md:flex-row items-center w-full">
              <Link href="https://app.mainframe.so">
                <Button size="lg">Try it out</Button>
              </Link>
              <Button className="hidden md:block" variant="link">
                Read our Docs
              </Button>
            </div>
          </div>
          <div className="md:basis-3/5 relative w-full h-[36rem] mdh-full md:w-auto md:h-auto">
            <Blob />
            <Blob delay="animation-delay-2000" />
            <div className="w-40 xl:w-80 h-40 xl:h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute w-40 md:w-60 xl:w-80 h-40 md:h-60 xl:h-80">
                <Image className="h-full" src={monitor} alt="Mainframe hero" />
              </div>
              <ul className="absolute grid place-items-center w-40 md:w-60 xl:w-80 h-40 md:h-60 xl:h-80 list-none origin-center animate-orbit">
                <Orb
                  image={notionLogo}
                  position="translate-x-44 md:translate-x-56 xl:translate-x-72"
                />
                <Orb
                  image={googleCalendarLogo}
                  position="translate-x-32 translate-y-32 md:translate-x-40 md:translate-y-40 xl:translate-x-52 xl:translate-y-52"
                />
                <Orb
                  image={pelotonLogo}
                  position="translate-y-[11.5rem] md:translate-y-56 xl:translate-y-72"
                />
                <Orb
                  image={githubLogo}
                  position="-translate-x-32 translate-y-32 md:-translate-x-40 md:translate-y-40 xl:-translate-x-52 xl:translate-y-52"
                />
                <Orb
                  image={zoteroLogo}
                  position="-translate-x-[11.5rem] md:-translate-x-56 xl:-translate-x-72"
                />
                <Orb
                  image={posthogLogo}
                  position="-translate-x-32 -translate-y-32 md:-translate-x-40 md:-translate-y-40 xl:-translate-x-52 xl:-translate-y-52"
                />
                <Orb
                  image={ouraLogo}
                  position="-translate-y-[11.5rem] md:-translate-y-56 xl:-translate-y-72"
                />
                <Orb
                  image={togglLogo}
                  position="translate-x-32 -translate-y-32 md:translate-x-40 md:-translate-y-40  xl:translate-x-52 xl:-translate-y-52"
                />
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
