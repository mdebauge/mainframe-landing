import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-col gap-x-4">
        <small className="font-medium">
          © 2024 Mainframe. All rights reserved.
        </small>
        <div className="flex gap-x-1 text-muted-foreground">
          <small>
            <Link href="/">Privacy Policy</Link>
          </small>
          <small>•</small>
          <small>
            <Link href="/">Terms and Conditions</Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
