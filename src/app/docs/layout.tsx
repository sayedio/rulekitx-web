import React from "react";
import Link from "next/link";
import { getAllDocs } from "@/lib/docs";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, ChevronRight, Hash } from "lucide-react";
import SidebarNav from "@/components/SidebarNav";

export const metadata = {
  title: "Documentation - RuleKitX",
  description: "Learn how to use, configure, and extend RuleKitX.",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allDocs = getAllDocs();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col md:flex-row gap-8 pt-24 pb-16">
        {/* Responsive Sidebar SidebarNav */}
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 h-fit md:max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 border-b md:border-b-0 md:border-r border-slate-900 pb-6 md:pb-0">
          <div className="flex items-center gap-2 mb-6 px-1">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-extrabold tracking-widest text-slate-500 uppercase">
              Documentation
            </span>
          </div>
          <SidebarNav docs={allDocs.map(d => ({
            slug: d.metadata.slug,
            title: d.metadata.title
          }))} />
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 max-w-4xl py-2">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
