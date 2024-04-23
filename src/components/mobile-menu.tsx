import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
          variant="ghost"
          size="icon"
        >
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle mobile nav</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="https://blog.mainframe.so/">
            <Button variant="ghost">Blog</Button>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="https://discord.gg/HUS4y59Dxw">
            <Button variant="ghost">Community</Button>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
