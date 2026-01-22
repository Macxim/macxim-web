"use client";

import Link from "next/link";
import MLetter from "./M";

export default function Header() {
  return (
    <header className="w-full max-w-4xl px-4 pt-12 pb-3">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home - Maxime Laforet">
          <MLetter className="w-8 h-8" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
