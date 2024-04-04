import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-20 px-3 sm:px-9 bg-background">
      <Link href="/">
        <Image
          src="/mainframe-logo.svg"
          alt="Mainframe logo"
          width={174}
          height={25}
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href="/">Log in</Link>
          </li>
          <li>
            <Button>Sign up</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
