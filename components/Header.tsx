"use client";

import Link from "next/link";
import MLetter from "./M";

export default function Header() {
  return (
    <header className="w-full max-w-4xl px-4 py-12 sm:min-w-4xl lg:px-0">
      <div className="flex items-center justify-between">
        <Link href="/" className="w-8 h-8">
          <MLetter />
        </Link>
      </div>
    </header>
  );
}
