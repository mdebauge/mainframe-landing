import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileMenuButton({
  onClick,
  isOpen,
}: {
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <Button className="md:hidden" variant="ghost" size="icon" onClick={onClick}>
      {isOpen ? (
        <X className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Menu className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
