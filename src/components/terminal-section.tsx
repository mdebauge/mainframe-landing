"use client";

import { DollarSign, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function TerminalSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm create mainframe");
    setCopied(true);
  };

  const resetCopy = () => {
    setCopied(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      resetCopy();
    }, 4000);
  }, []);

  return (
    <section className="flex items-center justify-between relative py-28 mb-20 gap-x-16">
      <div className="basis-2/5">
        {/* <h2 className="text-md text-muted-foreground font-medium mb-6 text-center md:text-left w-full">
          Run the command below to get started:
        </h2> */}
        <div className="flex mb-6 px-6 py-8 items-center rounded-xl bg-slate-900 text-white border-2 border-slate-400 drop-shadow-terminal">
          <DollarSign className="text-slate-500 w-5 h-5 mr-2" />
          <p>
            <span className="text-green-500">npm</span> create mainframe
          </p>
        </div>
        <Button
          onMouseEnter={resetCopy}
          onClick={handleCopy}
          size="sm"
          variant="outline"
        >
          <Copy className="w-4 h-4 mr-2" />

          {`${copied ? "Copied" : "Copy to clipboard"}`}
        </Button>
      </div>
      <div className="basis-1/2 px-6">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-center md:text-left w-full">
          Install Mainframe locally
        </h2>
        <p className="text-lg mb-6 text-center md:text-left w-full">
          Getting started with Mainframe's open-source app is quick and easy.
          Create a new Mainframe project locally with a single command.
        </p>
      </div>
    </section>
  );
}
