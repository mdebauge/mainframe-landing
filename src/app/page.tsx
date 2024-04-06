import { Button } from "@/components/ui/button";
import Image from "next/image";
import Step from "@/components/step";

import connectData from "../../public/connect-data.png";
import database from "../../public/database.png";
import api from "../../public/api.png";
import arrow from "../../public/arrow.svg";

export default function Home() {
  return (
    <main className="p-24 bg-background">
      <section className="flex h-full mt-32 mb-16 gap-x-12">
        <div className="basis-2/4">
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
        <div className="basis-2/4 flex justify-center items-center">
          <Image
            src="/mainframe-monitor.svg"
            alt="Mainframe hero"
            width={300}
            height={300}
          />
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
