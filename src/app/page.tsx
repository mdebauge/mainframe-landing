import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full mt-32 p-24 bg-background gap-x-12">
      <div className="basis-2/4">
        <h1 className="text-6xl font-bold mb-4">
          Simplify your data ecosystem
        </h1>
        <h2 className="text-xl mb-4">
          Connect and transform your data from any app or data source. Build
          apps with all your data in one tool.
        </h2>
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
    </main>
  );
}
