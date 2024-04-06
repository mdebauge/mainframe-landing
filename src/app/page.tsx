import { Button } from "@/components/ui/button";
import Image from "next/image";
import Step from "@/components/step";

import monitor from "../../public/mainframe-monitor.svg";
import connectData from "../../public/connect-data.png";
import database from "../../public/database.png";
import api from "../../public/api.png";
import arrow from "../../public/arrow.svg";
import notionLogo from "../../public/notion-logo.png";

export default function Home() {
  return (
    <main className="p-24 bg-background">
      <section className="flex h-[65vh] mb-20 gap-x-12">
        <div className="basis-2/5 flex flex-col justify-center items-start">
          <h1 className="text-6xl font-bold mb-4">
            Simplify your
            <br />
            data ecosystem
          </h1>
          <p className="text-xl mb-4">
            Connect and transform your data from any app or data source. Build
            apps with all your data in one tool.
          </p>
          <Button className="grow-0">Try it out</Button>
        </div>
        <div className="basis-3/5 relative">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-25 rounded-full filter blur-2xl animate-blob"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 opacity-25 rounded-full filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className="w-64 h-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-64 h-64">
              <Image src={monitor} alt="Mainframe hero" />
            </div>
            <ul className="absolute grid place-items-center w-64 h-64 list-none origin-center animate-orbit">
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist translate-x-72">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist translate-x-48 translate-y-48">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist translate-y-72">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist -translate-x-48 translate-y-48">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist -translate-x-72">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist -translate-x-48 -translate-y-48">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist -translate-y-72">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
              <li className="absolute w-16 h-16 aspect-square rounded-full overflow-hidden p-3 border border-primary bg-white drop-shadow-brutalist translate-x-48 -translate-y-48">
                <Image
                  className="animate-hold-position"
                  src={notionLogo}
                  alt="Notion logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-4xl text-center font-semibold mb-2">
          How it works
        </h2>
        <p className="text-lg text-center">
          Learn how easy it is to connect your data and start building your app
          within minutes
        </p>
        <div className="flex gap-x-8 w-full mt-10">
          <Step
            image={connectData}
            header="Connect your data"
            blurb="Easily connect and bring in data from multiple sources."
          />
          <Image
            className="-mt-28"
            src={arrow}
            alt="Arrow"
            width={50}
            height={50}
          />
          <Step
            image={database}
            header="Assemble customized databases"
            blurb="View, transform, and create databases with your combined data."
          />
          <Image
            className="-mt-28"
            src={arrow}
            alt="Arrow"
            width={50}
            height={50}
          />
          <Step
            image={api}
            header="Build your app"
            blurb="Our API and playground make it quick and easy to immediately start building your next app or custom component."
          />
        </div>
      </section>
    </main>
  );
}
