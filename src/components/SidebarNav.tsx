"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface DocLink {
  slug: string;
  title: string;
}

interface SidebarNavProps {
  docs: DocLink[];
}

export default function SidebarNav({ docs }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {docs.map((doc) => {
        const href = `/docs/${doc.slug}`;
        const isActive = pathname === href;

        return (
          <Link
            key={doc.slug}
            href={href}
            className={cn(
              "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 border",
              isActive
                ? "bg-cyan-950/20 border-cyan-500/20 text-cyan-400 font-semibold"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
            )}
          >
            {doc.title}
          </Link>
        );
      })}
    </nav>
  );
}
