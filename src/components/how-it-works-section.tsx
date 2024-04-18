import Step from "./step";

import connectData from "../../public/connect-data.png";
import database from "../../public/database.png";
import api from "../../public/api.png";

export default function HowItWorksSection() {
  return (
    <section className="relative mb-20">
      <h2 className="text-4xl text-center font-semibold mb-2">How it works</h2>
      <p className="text-lg text-center">
        Learn how easy it is to connect your data and start building your app
        within minutes
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
  );
}
