import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 py-8 w-full bg-background transition-transform duration-200 transform translate-y-[64px] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Button
        className="hidden absolute right-7 top-4"
        variant="ghost"
        size="icon"
        onClick={onClose}
      >
        <X />
      </Button>
      <ul className="flex flex-col justify-center items-center space-y-4">
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Button variant="link">Docs</Button>
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Button variant="link">Community</Button>{" "}
        </li>
        <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <Button variant="link">Sign up</Button>{" "}
        </li>
      </ul>
    </div>
  );
}
