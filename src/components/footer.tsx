import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center pb-4">
      <div className="flex flex-col gap-x-4">
        <small className="text-muted-foreground">
          © 2024 Mainframe. All rights reserved.
        </small>
        <div className="flex justify-center gap-x-1 text-sm text-muted-foreground">
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
