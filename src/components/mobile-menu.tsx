import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

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
          <Button variant="link">Docs</Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="link">Community</Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="link">Sign up</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
