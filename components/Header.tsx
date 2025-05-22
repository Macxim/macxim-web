"use client";

import Link from "next/link";
import MLetter from "./M";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isWorkPage = pathname === "/work";
  const linkHref = isWorkPage ? "/" : "/work";
  const linkText = isWorkPage ? "About" : "Work";

  return (
    <header className="w-full max-w-4xl px-4 py-12 sm:min-w-4xl lg:px-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="w-8 h-8">
          <MLetter />
        </Link>
        <Link
          href={linkHref}
          className="text-2xl font-semibold transition duration-150 ease-in-out hover:text-orange-600 focus:outline-none focus:text-orange-700"
        >
          {linkText}
        </Link>
      </div>
    </header>
  );
}
