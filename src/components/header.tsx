import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-20 px-3 sm:px-9 bg-background">
      <Link href="/">Mainframe</Link>
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
