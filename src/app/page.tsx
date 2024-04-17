import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Step from "@/components/step";
import Link from "next/link";
import DataScreenshot from "@/components/data-screenshot";
import PlaygroundScreenshot from "@/components/playground-screenshot";
import { ArrowRight } from "lucide-react";

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
import playgroundScreenshot from "../../public/Playground.png";
import dataScreenshot from "../../public/Data.png";

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
            <p className="text-xl mb-8 text-center lg:w-1/2">
              Mainframe helps you seamlessly access, transform, and deploy data
              from a single, unified source to accelerate your development.
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
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-6 text-center md:text-left w-full">
              Moving at full speed ahead
            </h1>
            <p className="text-lg mb-6 text-center md:text-left w-full">
              At Mainframe, we're on the move, actively building our product.
              Want to learn more? Dive into our latest updates on our blog or
              join our Discord to connect with us, fellow users, and help shape
              the product.
            </p>
            <div className="flex gap-x-2 gap-y-4 flex-col md:flex-row items-center w-full">
              <Link href="https://blog.mainframe.so">
                <Button variant="outline" size="lg">
                  Blog
                </Button>
              </Link>
              <Link href="https://discord.gg/HUS4y59Dxw">
                <Button variant="ghost" size="lg">
                  <svg
                    className="fill-primary w-[16px] h-[16px]"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.5535 2.81854C12.5178 2.33396 11.4104 1.98178 10.2526 1.78125C10.1104 2.03832 9.94429 2.38409 9.82976 2.65915C8.599 2.47406 7.37956 2.47406 6.17144 2.65915C6.05693 2.38409 5.88704 2.03832 5.74357 1.78125C4.58454 1.98178 3.47584 2.33525 2.44013 2.8211C0.351095 5.97791 -0.215207 9.0563 0.0679444 12.091C1.4535 13.1257 2.79627 13.7542 4.11638 14.1655C4.44233 13.7169 4.73302 13.2401 4.98345 12.7375C4.5065 12.5563 4.04969 12.3326 3.61805 12.073C3.73256 11.9882 3.84457 11.8995 3.95279 11.8082C6.58546 13.0396 9.44593 13.0396 12.0472 11.8082C12.1566 11.8995 12.2686 11.9882 12.3819 12.073C11.949 12.3339 11.4909 12.5576 11.014 12.7388C11.2644 13.2401 11.5538 13.7182 11.881 14.1668C13.2024 13.7555 14.5464 13.127 15.932 12.091C16.2642 8.57301 15.3644 5.52289 13.5535 2.81854ZM5.34212 10.2247C4.55181 10.2247 3.9037 9.48688 3.9037 8.58843C3.9037 7.68998 4.53797 6.95091 5.34212 6.95091C6.14628 6.95091 6.79437 7.68868 6.78053 8.58843C6.78178 9.48688 6.14628 10.2247 5.34212 10.2247ZM10.6578 10.2247C9.86752 10.2247 9.21941 9.48688 9.21941 8.58843C9.21941 7.68998 9.85366 6.95091 10.6578 6.95091C11.462 6.95091 12.1101 7.68868 12.0962 8.58843C12.0962 9.48688 11.462 10.2247 10.6578 10.2247Z" />
                  </svg>
                  &nbsp; Join our community
                </Button>
              </Link>
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
