import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-14 px-3 sm:px-9 bg-background">
      <Link href="/">Mainframe</Link>
      <nav>
        <ul className="flex gap-x-6">
          <li>
            <Link href="/">Log in</Link>
          </li>
          <li>
            <Link href="/">Sign up</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
