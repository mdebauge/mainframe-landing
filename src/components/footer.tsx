import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center pb-2">
      <div className="flex flex-col gap-x-4">
        <small className="">© 2024 Mainframe. All rights reserved.</small>
        <div className="flex gap-x-1 text-sm text-muted-foreground">
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
