import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24 bg-background">
      <section className="flex h-full mt-32 mb-16 gap-x-12">
        <div className="basis-2/4">
          <h1 className="text-6xl font-bold mb-4">
            Simplify your data ecosystem
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
        <h2 className="text-4xl text-center font-medium mb-8">How it works</h2>
        <p className="text-lg text-center">
          Learn how easy it is to connect your data and start building your app
          within minutes
        </p>
      </section>
    </main>
  );
}
